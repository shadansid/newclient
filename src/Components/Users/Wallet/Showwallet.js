import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link , Outlet} from 'react-router-dom'
import {Typography,Button,Box,Container} from '@mui/material'
const Showwallet = () => {
    const [walletdata,setwalletdata]  = useState([])
    const [total, settotal] = useState(0);
  
  useEffect(()=>{

    const config = {
      headers:{
        "accessToken":sessionStorage.getItem('accessToken')
      }
    }
   
    const url = "http://139.84.137.232:8800/api/showwallet";
  
  
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


{/* <div style={{padding:'30px' , display:'flex' , alignItems:'center' , justifyContent:'center' , gap:'50px'}}>

   <Box sx={{"&:active":{color:"red"},"&:hover":{color:"green"}}}>
    
   <Link style={{textDecoration:'none', fontSize:'16px' , color:'grey' , }} to='/userpanel/wallet'>Wallet Balance</Link>
    </Box>   
   <Link style={{textDecoration:'none', fontSize:'16px' , color:'grey', }} to='/userpanel/wallet/addmoney'>Add Money</Link>
   <Link style={{textDecoration:'none', fontSize:'16px' , color:'grey'}} to='/userpanel/wallet/withdraw'>Withdraw</Link>
  
   </div>
  
   <Container> <Outlet /></Container> */}
   

{/* ============================================================================== */}
<div style={{padding:'20px'}}><Typography sx={{fontSize:'20px',    display: 'flex',
    alignItems: 'center',
    height: '4vh' , color:'grey'}}>Wallet Balance</Typography></div>
<div style={{fontSize:'25px',background: '#1B202E',
    padding: '25px',
    color: 'grey'}}>{total && "Total Amount ≈" + "$" + "------"}</div>

{walletdata && walletdata.map((ele)=>{

return <div style={{display:'flex', alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
{/* {ele.type== 'credit'? :} */}
<div style={{width:"20%"}}><img src={`http://139.84.137.232:8800/api/static/images/coinimage/${ele.currency.toUpperCase()}.png`} alt=""  height="20px" width="20px"/></div>
<div style={{color:'#7D8794', fontSize:'13px', width:"30%"}}>{(ele.currency).toUpperCase()}</div>
<div style={{color:'#7D8794', fontSize:'13px',width:"30%"}}>{ele.quantity}&nbsp;{ele.currency.toUpperCase()}</div>
<div style={{width:"20%"}}><Button>Widthraw</Button></div>



{/* <div><img src= alt="" /></div> */}

</div>

})}


</>
  )
}

export default Showwallet