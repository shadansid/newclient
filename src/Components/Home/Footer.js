import React from 'react'
// import './css/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
const Footer = (props) => {
  return (
    <>
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: props.bg == '#ffffff' ? '#f9f9f9' : '#1b1f2c',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              width: { sm: '200px', xs: '100px' },
              height: { sm: '200px', xs: '100px' },
              backgroundColor: '',
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div class="col" style={{ padding: '20px' }}>
              <h4 style={{ color: 'white', fontSize: '16px', lineHeight: 3 }}>Company</h4>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>About us</p>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>Need Help?</p>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>Crypto Exchange</p>
            </div>
          </Box>

          <Box
            sx={{
              width: { sm: '200px', xs: '100px' },
              height: { sm: '200px', xs: '100px' },
              backgroundColor: '',
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div class="col" style={{ padding: '20px' }}>
              <h4 style={{ color: 'white', fontSize: '16px', lineHeight: 3 }}>Trading</h4>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>Spot Wallet</p>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>Margin Wallet</p>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>Future Trading</p>
            </div>
          </Box>
          <Box
            sx={{
              width: { sm: '200px', xs: '100px' },
              height: { sm: '200px', xs: '100px' },
              backgroundColor: '',
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div class="col" style={{ padding: '20px' }}>
              <h4 style={{ color: 'white', fontSize: '16px', lineHeight: 3 }}>Listing</h4>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>
                Create New Token
              </p>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>Earn with us</p>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}>Others</p>
            </div>
          </Box>

          <Box
            sx={{
              width: { sm: '200px', xs: '100px' },
              height: { sm: '200px', xs: '100px' },
              backgroundColor: '',
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div class="col" style={{ padding: '20px' }}>
              <h4 style={{ color: 'white', fontSize: '16px', lineHeight: 3 }}>Comunity</h4>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}> <Box sx={{ display: 'flex', alignItems: 'center' }} ><InstagramIcon sx={{ color: '#AA1F85' }} /> &nbsp; Instagram</Box> </p>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><YouTubeIcon sx={{ color: '#FF707A' }} />&nbsp;Youtube</Box> </p>
              <p style={{ fontSize: '10px', color: 'grey', lineHeight: '2' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><FacebookIcon sx={{ color: '#7C95FB' }} />&nbsp; Facebook</Box> </p>
            </div>
          </Box>


        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '7vh',
          backgroundColor: props.bg == '#ffffff' ? '#ffffff' : '#171B26',
        }}
      >
        <p style={{ fontSize: '10px', color: 'grey' }}>
          {' '}
          Copyright © 2023 BCEX Crypto Exchange. All rights reserved.
        </p>
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
