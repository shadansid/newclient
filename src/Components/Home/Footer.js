import React from 'react'
import './css/Footer.css'
import {Container , Grid} from '@mui/material'
const Footer = () => {
  return (
    
    
   <>
   <footer style={{backgroundColor:'#0B0917'}}>

   
  <div class="footer" style={{ color:'#2A2A2D'}}>
    
    
    
   
    


    <div class="col">
        <h4 style={{ color:'grey', fontSize:'22px'}}>Company</h4>
        <p>About us</p>
        <p>Need Help?</p>
        <p>Crypto Exchange</p>
        <p>Vision</p>
    </div>
  

    <div class="col">
        <h4 style={{ color:'grey', fontSize:'22px'}}>Trading</h4>
        <p>Spot Wallet</p>
        <p>Margin Wallet</p>
        <p>Future Trading</p>
    </div>


    <div class="col">
        <h4 style={{ color:'grey', fontSize:'22px'}}>Listing</h4>
        <p>Create New Token</p>
        <p>Earn with us</p>
        <p>Others</p>
        
    </div>
    <div class="col">
        <h4 style={{ color:'grey', fontSize:'22px'}}>Analysis</h4>
        <p>CandleStick Chart</p>
        <p>Need help</p>
        <p>Tutorial</p>
        
    </div>



</div>
</footer>
  

    <div style={{display:'flex', justifyContent:'center', alignItems:'center' , height:'10vh', backgroundColor:'#171B26'}}>
      <p style={{fontSize:'14px' , color:'grey'}}> Copyright © 2023  BCEX Crypto Exchange. All rights reserved.</p>
    </div>
  

    </>
  
  
    )
}

export default Footer