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
   


  },[walletdata])


    
 
 
    return (
        <>

      
        {/* ============================================================================== */}
        <div style={{padding:'20px'}}><Typography sx={{fontSize:'20px',    display: 'flex',
            alignItems: 'center',
            height: '4vh' , color:'grey'}}>Wallet Balance</Typography></div>
      
        
        {walletdata && walletdata.map((ele)=>{
        
        return <div style={{display:'flex', alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
        {/* {ele.type== 'credit'? :} */}
        <div style={{width:"20%"}}><img src={`http://139.84.137.232/api/static/images/coinimage/${ele.currency.toUpperCase()}.png`} alt=""  height="30px" width="30px"/></div>
        <div style={{color:'#7D8794', fontSize:'13px', width:"30%"}}>{(ele.currency).toUpperCase()}</div>
        <div style={{color:'#7D8794', fontSize:'13px',width:"30%"}}>{ele.quantity}&nbsp;{ele.currency.toUpperCase()}</div>
        <div style={{width:"20%"}}><Button>Widthraw</Button></div>
        
        
        
        {/* <div><img src= alt="" /></div> */}
        
        </div>
        
        })}
        
        
        </>
  )
}

export default WalletDashboard