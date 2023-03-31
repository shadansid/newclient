import React from 'react'
// import './css/Footer.css'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
const Footer = (props) => {
  return (
    
    
      <>
          
        <Box sx={{ padding: '20px' ,display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#1b1f2c'}}>
          

          <div style={{display:'flex', alignItems:'center', gap:'20px', flexWrap:'wrap'}}>


                  <Box sx={{ width: {sm:'200px',xs:'100px'}, height: {sm:'200px',xs:'100px'}, backgroundColor: '#1b1f2c', flexGrow: '1', display:'flex', justifyContent:'center',alignItems:'center' }}>
                  <div class="col" style={{ padding:'20px'}}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Company</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>About us</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Need Help?</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Crypto Exchange</p>
       
    </div>
                </Box>
                  <Box sx={{ width: {sm:'200px',xs:'100px'}, height: {sm:'200px',xs:'100px'}, backgroundColor: '#1b1f2c', flexGrow: '1', display:'flex', justifyContent:'center',alignItems:'center' }}>
                  <div class="col" style={{ padding:'20px'}}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Company</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>About us</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Need Help?</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Crypto Exchange</p>
       
    </div>
                </Box>
                <Box sx={{width:{sm:'200px',xs:'100px'},height:{sm:'200px',xs:'100px'}, backgroundColor:'', flexGrow:'1', display:'flex', justifyContent:'center',alignItems:'center'}}>
    <div class="col"  style={{ padding:'20px'}}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Trading</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>Spot Wallet</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Margin Wallet</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Future Trading</p>
    </div>
</Box>
                <Box sx={{width:{sm:'200px',xs:'100px'},height:{sm:'200px',xs:'100px'}, backgroundColor:'', flexGrow:'1',display:'flex', justifyContent:'center',alignItems:'center'}}>
    <div class="col" style={{ padding:'20px'}}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Listing</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>Create New Token</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Earn with us</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Others</p>
        
    </div></Box>
                

          </div>


          </Box>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center' , height:'7vh', backgroundColor:'#171B26'}}>
      <p style={{fontSize:'10px' , color:'grey'}}> Copyright © 2023  BCEX Crypto Exchange. All rights reserved.</p>
    </Box>

{/*         
   <Box sx={{width:window.innerWidth, backgroundColor:''}}>
   <Box sx={{backgroundColor:'#171B26',padding: {sm:'60px',xs:'10px'} ,display:'flex', alignItems:'center', justifyContent:'center'}}>

   
  <Box  sx={{ display:'flex',flexDirection:'row', alignItems:'center', gap:'20px', flexWrap:'wrap' }}>
    
    
    
   
    


   
  






         <div class="col"  style={{padding:'20px' }}>
        <h4 style={{ color:'grey', fontSize:'14px'}}>Analysis</h4>
        <p style={{fontSize:'10px' , color:'grey'}}>CandleStick Chart</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Need help</p>
        <p style={{fontSize:'10px' , color:'grey'}}>Tutorial</p>
        
    </div>



</Box>
</Box>
  

   
  
    </Box> */}
    </>
  
  
    )
}

export default Footer