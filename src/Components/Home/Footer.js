import React from 'react'
// import './css/Footer.css'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
const Footer = (props) => {
  return (
    
    
      <>
        
   <Box sx={{width:window.innerWidth, backgroundColor:'aqua'}}>
   <Box sx={{backgroundColor:'#171B26',padding: {sm:'60px',xs:'10px'} ,display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'purple'}}>

   
  <Box  sx={{ display:'flex',flexDirection:'row', alignItems:'center', gap:'20px', flexWrap:'wrap' }}>
    
    
    
   
    


    <div class="col" style={{ padding:'20px', backgroundColor:'yellow' , border:'1px solid red'}}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Company</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>About us</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Need Help?</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Crypto Exchange</p>
       
    </div>
  

    <div class="col"  style={{ padding:'20px', backgroundColor:'yellow' , border:'1px solid red'}}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Trading</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>Spot Wallet</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Margin Wallet</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Future Trading</p>
    </div>


    <div class="col" style={{ padding:'20px', backgroundColor:'yellow' , border:'1px solid red'}}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Listing</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>Create New Token</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Earn with us</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Others</p>
        
    </div>




         <div class="col"  style={{padding:'20px', backgroundColor:'yellow' , border:'1px solid red'}}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Analysis</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>CandleStick Chart</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Need help</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Tutorial</p>
        
    </div>



</Box>
</Box>
  

    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center' , height:'7vh', backgroundColor:'#171B26'}}>
      <p style={{fontSize:'10px' , color:'grey'}}> Copyright © 2023  BCEX Crypto Exchange. All rights reserved.</p>
    </Box>
  
    </Box>
    </>
  
  
    )
}

export default Footer