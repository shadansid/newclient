import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Typography,Button, Box} from '@mui/material'
const WalletBalance = () => {
    const [walletdata,setwalletdata]  = useState([])
    const [total, settotal] = useState(0);
  
  
  useEffect(()=>{

    const config = {
      headers:{
        "accessToken":sessionStorage.getItem('accessToken')
      }
    }
   
    const url = "/showwallet";
  
  
    axios.get(url, config)
    .then(res=>{ 
    setwalletdata(res.data)
    let totalbal = 0;
      res.data.forEach(item=>{
        
        
        totalbal += item.quantity; 
      })
      settotal(totalbal);
      

    })
    .catch(err=> console.log(err))


   


  },[walletdata])


   
    
  
    return (
    
<div style={{backgroundColor:"#171B26", height:'30vh', width:'1200px'}}>
<div ><Typography sx={{fontSize:'25px' ,color:'cornflowerblue', height:'10vh',padding:'30px', display:"flex", alignItems:'center'}}>Estimated Balance</Typography></div>

<Box sx={{display:'flex' , gap:'50px', alignItems:'center', height:'10vh',padding:'30px'}}>
<div style={{fontSize:'18px', color:"white"}}>{total && total + " USDT" + " ≈ " } <div style={{color:'#76808F',fontSize:'25px'}}>{"₹ " + total*81.61}</div></div>
<div style={{display:'flex', gap:'20px'}}>
<Button variant="contained" size="small">Deposite</Button>
<Button variant="contained" size="small">Withdraw</Button>
<Button variant="contained" size="small">Buy Crypto</Button>
</div>
</Box>

</div>
  )
}

export default WalletBalance