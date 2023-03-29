import React from 'react'
import './css/Footer.css'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
const Footer = (props) => {
  return (
    
    
   <>
   <footer style={{backgroundColor:'#171B26'}}>

   
  <Box class="footer" sx={{ color:'grey', display:'flex', flexWrap:'wrap' }}>
    
    
    
   
    


    <div class="col">
        <h4 style={{ color:'grey', fontSize:'22px'}}>Company</h4>
        <p style={{fontSize:'14px' , color:'grey'}}>About us</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Need Help?</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Crypto Exchange</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Vision</p>
    </div>
  

    <div class="col">
        <h4 style={{ color:'grey', fontSize:'22px'}}>Trading</h4>
        <p style={{fontSize:'14px' , color:'grey'}}>Spot Wallet</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Margin Wallet</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Future Trading</p>
    </div>


    <div class="col">
        <h4 style={{ color:'grey', fontSize:'22px'}}>Listing</h4>
        <p style={{fontSize:'14px' , color:'grey'}}>Create New Token</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Earn with us</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Others</p>
        
    </div>
    <div class="col">
        <h4 style={{ color:'grey', fontSize:'22px'}}>Analysis</h4>
        <p style={{fontSize:'14px' , color:'grey'}}>CandleStick Chart</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Need help</p>
        <p style={{fontSize:'14px' , color:'grey'}}>Tutorial</p>
        
    </div>



</Box>
</footer>
  

    <div style={{display:'flex', justifyContent:'center', alignItems:'center' , height:'10vh', backgroundColor:'#171B26'}}>
      <p style={{fontSize:'14px' , color:'grey'}}> Copyright © 2023  BCEX Crypto Exchange. All rights reserved.</p>
    </div>
  

    </>
  
  
    )
}

export default Footer