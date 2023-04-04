import React, { useEffect, useState} from 'react'
import { Box, Typography } from '@mui/material'
import SimpleLineChart from './SimpleLineChart';
import axios from 'axios'
import MobShortcuts from './MobShortcuts';
import WalletChart from './Wallet/WalletChart';
import EyeOpen from '@mui/icons-material/RemoveRedEyeOutlined';
import Eye2 from '@mui/icons-material/RemoveRedEye';
import Eye3 from '@mui/icons-material/VisibilityOff';
const FourBoxes = () => {
 
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

  const [showBal, setshowBal] = useState(1)
  const ToggleBal = () => {
    if (showBal) {
       setshowBal(0)
    } else {
      setshowBal(1)
     }


   }
    

 
 
    return (
      <>
        <Box sx={{display:'flex', justifyContent:'', gap:'20px', margin:'10px'}}>


                <Box sx={{ backgroundColor: "#1C2230", display: {sm:'flex',xs:'none'}, alignItems: '', flexDirection: 'column', padding: '20px', borderRadius: '', boxShadow: '1px -2px 14px -1px black', width: '100%' }}>

                    <Typography sx={{ fontSize: { sm: '18px', xs: '16px' }, color: 'cornflowerblue', paddingLeft: '', display: "flex", alignItems: '', backgroundColor: '' }}>Estimated Balance &nbsp;
                        {showBal ? <Box sx={{ cursor: 'pointer', padding: 0, height: '1vh' }} onClick={ToggleBal}><Eye2 sx={{ fontSize: '22px', color: 'grey' }} /></Box> : <Box sx={{ cursor: 'pointer', padding: 0, height: '1vh' }} onClick={ToggleBal}><Eye3 sx={{ fontSize: '22px', color: 'grey' }} /></Box>}</Typography>    
                    {showBal ? <Box sx={{ color: 'grey', fontSize: '20px' }}>{total && total.toFixed(3)}</Box> : "***Balance hidden***"}
                    <Box sx={{padding:'30px'}}><SimpleLineChart/></Box>
                </Box>

                




                <Box sx={{ backgroundColor: "#1C2230", display: 'flex', alignItems: 'center',justifyContent:'center', flexDirection: 'column', padding: '20px', borderRadius: '', boxShadow: '1px -2px 14px -1px black', width: '100%' }}>
                <Box sx={{display:''}}>     
                <Typography sx={{ fontSize: { sm: '18px', xs: '16px' }, color: 'cornflowerblue', paddingLeft: '', display: "flex", alignItems: '', backgroundColor: '' }}>Estimated Balance &nbsp;
                        {showBal ? <Box sx={{ cursor: 'pointer', padding: 0, height: '1vh' }} onClick={ToggleBal}><Eye2 sx={{ fontSize: '22px', color: 'grey' }} /></Box> : <Box sx={{ cursor: 'pointer', padding: 0, height: '1vh' }} onClick={ToggleBal}><Eye3 sx={{ fontSize: '22px', color: 'grey' }} /></Box>}</Typography>    
                    {showBal ? <Box sx={{ color: 'grey', fontSize: '20px' }}>{total && total.toFixed(3)}</Box> : "***Balance hidden***"}  </Box>
            

               <Box sx={{display:'flex', justifyContent:'flex-start'}}>     
                <Typography sx={{ fontSize: { sm: '21px', xs: '16px' }, color: 'cornflowerblue', paddingLeft: '', display: "flex", alignItems: '', backgroundColor: '', justifyContent:'flex-start' }}> Wallet Overview
 &nbsp;
                       </Typography> </Box>   
                    <Box sx={{ color: 'grey', fontSize: '20px' , padding:'20px'}}></Box>
            <Box><WalletChart /></Box>
            <MobShortcuts/>
</Box>

              </Box>
      
      </>
  )
}

export default FourBoxes