import React from 'react'
import {Container, Typography, Toolbar,IconButton, Button,Badge,Box, Item} from '@mui/material'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { fontWeight } from '@mui/system';
import CoinDatah from './CoinData/CoinDatah'
import SecurityIcon from '@mui/icons-material/Security';
import TaskIcon from '@mui/icons-material/Task';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import LaptopIcon from '@mui/icons-material/Laptop';
import WindowIcon from '@mui/icons-material/Window';
import AutoWriteText from './AutoWriteText'
import WebhookIcon from '@mui/icons-material/Webhook';
import CoinData from '../Users/Coindata/CoinData';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';
import DynamicText from './DynamicText';

const Main = (props) => {
 
  const texts = ['can trade directly with each other.', 'can Hold upto 350 Currencies', 'can instantly withdraw their money', 'and alot more '];

  return (
    <>
      <Box sx={{ backgroundColor: props.color , width:window.innerWidth, overflow:'hidden'}}>
        <Box sx={{ height: {xs:'100vh',sm:'100vh'}, backgroundColor: (props.color==='#171B26'?'#f2f2f2':'#171B26'), padding: '20px'}}>
        
          <div style={{}}>
            <Box sx={{display:'flex', height: {xs:'60vh',sm:'100vh'}, alignItems:'center', justifyContent:'center', padding:'20px'}}>
           
           
           <Box sx={{fontSize: {xs:'42px',sm:'102px'}, color: (props.color==='#171B26'?'grey':'white'), fontWeight: '900', fontFamily: 'roboto'}}>Buy & Sell Instantly And
           
              <Box sx={{
                fontSize: {xs:'42px',sm:'102px'}, color: 'white', fontWeight: '900', fontFamily: 'roboto', background: 'linear-gradient(to right,  #1B42FE, #EF0F4B)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
                  animation: 'slide 1s linear infinite',
                }}> Hold Cryptocurrency</Box>
               
               
                <Box sx={{fontSize:{xs:'13px',sm:'23px'} , color:'grey', fontWeight:'200', display:'flex', gap:'2px', }}>BCEX Exchange is such a marketplace where people&nbsp;<Box sx={{display:{xs:'block', sm:'none'}}}>can trade and hold their coins</Box>
             
                  <DynamicText texts={texts} />
                </Box>
                
              
                <Button size='large' sx={{backgroundColor:'#4239DE'}} variant='contained'>Explore</Button>
              </Box>




            </Box>

            <div>

            </div>


        </div>
        
        
        
        </Box>

        <Box sx={{ padding: '60px' ,display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#f2f2f2'}}>
          

          <div style={{display:'flex', alignItems:'center', gap:'20px', flexWrap:'wrap'}}>


            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="http://localhost:8800/static/images/vox/1.png"  height='150px' width='300px' alt="" />
                </div>
            <div style={{width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
            <img src="http://localhost:8800/static/images/vox/2.jpg"   height='150px' width='300px'  alt="" />
                </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
            <img src="http://localhost:8800/static/images/vox/3.png"  height='150px' width='300px'  alt="" />
                </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
            <img src="http://localhost:8800/static/images/vox/4.png"  height='150px' width='300px' alt="" />
                </div>
                

          </div>


        </Box>




  <Container sx={{backgroundColor:'white'}}>
    
    {/* <Container sx={{display:'flex' , alignItems:'center' , paddingTop:'100px'}}>

    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'' , gap:'20px'}}>
    <div style={{fontSize:'52px' , color:'#2A2A2D' , fontWeight:'900' , fontFamily:'Verdana'}}>Buy & Sell Instantly And Hold Cryptocurrency</div>
   
    <div style={{fontSize:'14px' ,color:'grey'}}>BCEX Exchange is such a marketplace where people can trade directly with each other.</div>
    <div><Button sx={{padding:'15px' , backgroundColor:'orange'}} variant='contained'>Register Now</Button></div>

    </Box>
    <Box>

      <img src="http://139.84.137.232/api/static/images/banner3.png" height="400px" width="400px"></img>



    </Box>
    </Container> */}
{/* 
      <Box sx={{ display:'flex' , gap:'20px' , paddingTop:'80px'}}>

          <div><img src="http://139.84.137.232/api/static/images/vox/1.png" height="170px" width="300px" alt="" /></div>
          <div><img src="http://139.84.137.232/api/static/images/vox/2.jpg" height="170px" width="300px" alt="" /></div>
          <div><img src="http://139.84.137.232/api/static/images/vox/3.png" height="170px" width="300px" alt="" /></div>
          <div><img src="http://139.84.137.232/api/static/images/vox/4.png" height="170px" width="300px" alt="" /></div>
          </Box> */}
          



<Box sx={{paddingTop:'50px',paddingBottom:'50px' , fontSize:'32px', color:'grey', fontWeight:'600', textAlign:'center', fontFamily:'roboto'}}>Market Trend</Box>


<Container style={{paddingBottom:'40px'}}>
<CoinDatah></CoinDatah>
{/* <CoinData on={0}></CoinData> */}
{/* <CoinData on={1}></CoinData> */}

</Container>






{/* =====================================================end */}
        </Container>
   
       
        <Box sx={{ padding: '20px' ,display:'flex', alignItems:'center', justifyContent:'center', height:'50vh', backgroundColor:'#171B26'}}>
          

          <div style={{display:'flex', alignItems:'center', gap:'20px'}}>


                {/* <div style={{width:'200px',height:'200px', backgroundColor:'#171B26'}}>w</div>
                <div style={{width:'200px',height:'200px', backgroundColor:'#171B26'}}>w</div>
                <div style={{width:'200px',height:'200px', backgroundColor:'#171B26'}}>w</div>
                <div style={{width:'200px',height:'200px', backgroundColor:'#171B26'}}>w</div> */}
                

          </div>


        </Box>

       
        {/* <Box sx={{backgroundColor:'#f9f2f2', border:'1px solid green'}}>
            
            <Box sx={{paddingTop:{sm:'50px',xs:'20px'},paddingBottom:{sm:'50px',xs:'20px'},fontSize:{sm:'32px',xs:'22px'}, color:'#2A2A2D',fontWeight:'800'}}>Trade Anywhere</Box>
            
            
          <Box sx={{display:'flex', justifyContent:'center', width:window.innerWidth}}>  <Box sx={{display:'flex',flexDirection:{xs:'column', sm:'row'}, alignItems:'center',backgroundColor:'#f2f2f2'}}>
           
           <div style={{ width: "50%" }}><img src="/static/images/trades.png" width="300px" height="300px" alt="" /></div>
          
          
           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: {sm:'500px',xs:'200px'}, flexDirection: 'column' }}>
           
           <Box sx={{height:{sm:'10vh',xs:'6vh'}}} >
           
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><AppleIcon/>&nbsp;Apple</IconButton>
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><GoogleIcon/>&nbsp;Google Play</IconButton>
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><LaptopIcon/>&nbsp;Mac Os</IconButton>
           </Box>
           
           <Box sx={{height:{sm:'10vh',xs:'6vh'}}} >
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><WindowIcon/>&nbsp;Windows</IconButton>
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><FlutterDashOutlinedIcon/>&nbsp; Linux</IconButton>
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><WebhookIcon/>&nbsp;APIs</IconButton>
           </Box>
           
           </Box>
           </Box></Box>
            </Box> */}
 
</Box>
  </> 
 
    )
}

export default Main