import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link , Outlet} from 'react-router-dom'
import {Typography,Button,Box,Container} from '@mui/material'
import Loading from '../../Loading'
const Showwallet = () => {
    const [walletdata,setwalletdata]  = useState(0)
    const [total, settotal] = useState(0);
  
  useEffect(()=>{

    const config = {
      headers:{
        "accessToken":sessionStorage.getItem('accessToken')
      }
    }
   
    const url = "http://139.84.137.232/api/showwallet";
  
  
    axios.get(url, config)
    .then(res=>{ 
    setwalletdata(res.data)
    let totalbal = 0;
    res.data.forEach(item=>{

      
      totalbal += item.quantity; 
    })
    settotal(totalbal);
    




    
    })
    // .catch(err=> console.log(err))



//  axios.get('https://api.binance.com/api/v3/ticker/price?symbol=')


   


  },[walletdata])

// console.log("this is wallet data "+ walletdata.quantity)
   
    
  
    return (
    
<>

{  walletdata? <Box>
          
          <div style={{padding:'30px' , display:'flex' , alignItems:'center' , justifyContent:'center' , gap:'50px'}}>
          
          <Box sx={{"&:active":{color:"red"},"&:hover":{color:"green"}}}>
           
          <Link style={{textDecoration:'none', fontSize:'12px' , color:'grey' , }} to='/userpanel/wallet'>Wallet Balance</Link>
           </Box>   
          <Link style={{textDecoration:'none', fontSize:'12px' , color:'grey', }} to='/userpanel/wallet/addmoney'>Add Money</Link>
          <Link style={{textDecoration:'none', fontSize:'12px' , color:'grey'}} to='/userpanel/wallet/withdraw'>Withdraw</Link>
          
          </div>
          
          <Container> <Outlet /></Container>
          
          
          {/* ============================================================================== */}
          {/* <div style={{padding:'20px'}}><Typography sx={{fontSize:'20px',    display: 'flex',
           alignItems: 'center',
           height: '4vh' , color:'grey'}}>Wallet Balance</Typography></div> */}
          <Box sx={{height:'2vh'}}></Box>
          <Box sx={{fontSize:{sm:'25px',xs:'16px'},background: '#1B202E',
           padding: {sm:'25px',xs:'10px'},
           color: 'grey'}}>{total && "Total Amount ≈" + "$" + "------"}</Box>
          
          {walletdata && walletdata.map((ele)=>{
          
          return <div style={{display:'flex', alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
          {/* {ele.type== 'credit'? :} */}
          <div style={{width:"20%"}}><img src={`http://139.84.137.232/api/static/images/coinimage/${ele.currency.toUpperCase()}.png`} alt=""  height="30px" width="30px"/></div>
          <Box sx={{color:'#7D8794', fontSize:{sm:'13px',xs:'10px'}, width:"30%"}}>{(ele.currency).toUpperCase()}</Box>
          <Box sx={{color:'#7D8794', fontSize:{sm:'13px',xs:'10px'},width:"30%"}}>{ele.quantity}&nbsp;{ele.currency.toUpperCase()}</Box>
          <div style={{width:"20%"}}><Button  sx={{fontSize:{sm:'13px',xs:'10px'}}} size='small'>Widthraw</Button></div>
          
          
          
          {/* <div><img src= alt="" /></div> */}
          
          </div>
          
          })}
          
          </Box>:<Loading/>}

</>
  )
}

export default Showwallet