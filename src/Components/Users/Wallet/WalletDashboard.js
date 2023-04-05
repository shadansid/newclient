import React, { useEffect,useState} from 'react'
import { Button, Box, Typography } from '@mui/material'
import axios from 'axios'
const WalletDashboard = () => {
    const [walletdata,setwalletdata]  = useState([])
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
   


  },[walletdata])


    
 
 
    return (
        <>

      
        {/* ============================================================================== */}
        <Box style={{padding:'20px'}}><Typography sx={{fontSize:'20px',    display: {sm:'flex',xs:'none'},
            alignItems: 'center',
            height: '4vh' , color:'grey'}}>Wallet Balance</Typography></Box>
      
        
        {walletdata && walletdata.map((ele)=>{
        
        return <div style={{display:'flex', alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
        {/* {ele.type== 'credit'? :} */}
        <Box style={{width:"20%"}}><img src={`http://139.84.137.232/api/static/images/coinimage/${ele.currency.toUpperCase()}.png`} alt=""  height="30px" width="30px"/></Box>
        <Box sx={{color:'#7D8794', fontSize:{sm:'13px',xs:'10px'}, width:"30%"}}>{(ele.currency).toUpperCase()}</Box>
        <Box sx={{color:'#7D8794', fontSize:{sm:'13px',xs:'10px'},width:"30%"}}>{ele.quantity}&nbsp;{ele.currency.toUpperCase()}</Box>
        <Box sx={{width:"20%"}}><Button sx={{fontSize:{sm:'13px',xs:'10px'}}} size='small'>Widthraw</Button></Box>
        
        
        
        {/* <div><img src= alt="" /></div> */}
        
        </div>
        
        })}
        
        
        </>
  )
}

export default WalletDashboard