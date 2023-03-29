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
      <div style={{ backgroundColor: props.color }}>
        <Box sx={{ height: {xs:'100vh',sm:'100vh'}, backgroundColor: '#171B26', padding: '20px'}}>
        
          <div style={{}}>
            <Box sx={{display:'flex', height: {xs:'60vh',sm:'100vh'}, alignItems:'center', justifyContent:'center', padding:'20px'}}>
           
           
           <Box sx={{fontSize: {xs:'62px',sm:'102px'}, color: 'white', fontWeight: '900', fontFamily: 'roboto'}}>Buy & Sell Instantly And
           
              <Box sx={{
                fontSize: {xs:'62px',sm:'102px'}, color: 'white', fontWeight: '900', fontFamily: 'roboto', background: 'linear-gradient(to right,  #1B42FE, #EF0F4B)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
                  animation: 'slide 1s linear infinite',
                }}> Hold Cryptocurrency</Box>
               
               
                <Box sx={{fontSize:{xs:'13px',sm:'23px'} , color:'grey', fontWeight:'200', display:'flex'}}>BCEX Exchange is such a marketplace where people&nbsp;
                  {/* <AutoWriteText  text="can trade directly with each other." /> */}
                  <DynamicText texts={texts} />
                </Box>
                
              
                <Button size='large' sx={{backgroundColor:'#4239DE'}} variant='contained'>Explore</Button>
              </Box>




            </Box>

            <div>

            </div>


        </div>
        
        
        
        </Box>

        <Box sx={{ padding: '20px' ,display:'flex', alignItems:'center', justifyContent:'center', height:'50vh', backgroundColor:'#f2f2f2'}}>
          

          <div style={{display:'flex', alignItems:'center', gap:'20px', flexWrap:'wrap'}}>


                <div style={{width:'200px',height:'200px', backgroundColor:'#171B26', flexGrow:'1'}}>w</div>
                <div style={{width:'200px',height:'200px', backgroundColor:'#171B26', flexGrow:'1'}}>w</div>
                <div style={{width:'200px',height:'200px', backgroundColor:'#171B26', flexGrow:'1'}}>w</div>
                <div style={{width:'200px',height:'200px', backgroundColor:'#171B26', flexGrow:'1'}}>w</div>
                

          </div>


        </Box>




  <Container sx={{backgroundColor:props.color}}>
    
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



{/* 

<Box sx={{padding:{xs:'50px',sm:'120px'},margin:'50px', backgroundSize:'cover' , backgroundPosition:'center', display:'flex',height:'100vh', color:'white'  }}>

<div  style={{width:'50%'}}>
<div style={{color:'grey', fontSize:'35px', lineHeight:'1'}}>Install Mobile App and earn on the go with a million crypto pioneers</div>
<div style={{padding:'10px'}}/>
 <p style={{color:'grey', fontSize:'16px'}}>Never miss a new token with new launches, free Airdrops and price alerts.</p>

</div>

<div style={{width:'50%'}}>

</div>




</Box>
<Box sx={{display:'flex' , flexDirection:'column' , gap:'20px' , fontSize:'16px' , color:'grey'}}>
  <div>Special Notice About Tradexpro Markets Limited</div>
  <div style={{ fontSize:'15px' , color:'grey', fontWeight:'200', display:'flex'}}>Tradexpro Collect & Win Christmas Edition: Trade TRX, BTT, WIN, JST or SUN to Light Up the Christmas Tree & Share $300k in Rewards!</div>
</Box> */}


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

       
        <Container>
            
            <Box sx={{paddingTop:'50px',paddingBottom:'50px',fontSize:'32px', color:'#2A2A2D',fontWeight:'800'}}>Trade Anywhere</Box>
            
            
            <Box sx={{display:'flex', backgroundColor:'#f2f2f2'}}>
            <div style={{width:"50%"}}><img src="http://139.84.137.232/api/static/images/banner4.png" width="500px" height="500px" alt="" /></div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'500px', flexDirection:'column'}}>
            
            <div style={{height:'10vh'}} >
            
            <IconButton sx={{color:'#2A2A2D' , fontSize:'16px' , padding:'10px'}}><AppleIcon/>&nbsp;Apple</IconButton>
            <IconButton sx={{color:'#2A2A2D' , fontSize:'16px' , padding:'10px'}}><GoogleIcon/>&nbsp;Google Play</IconButton>
            <IconButton sx={{color:'#2A2A2D' , fontSize:'16px' , padding:'10px'}}><LaptopIcon/>&nbsp;Mac Os</IconButton>
            </div>
            
            <div style={{height:'10vh'}}>
            <IconButton sx={{color:'#2A2A2D' , fontSize:'16px' , padding:'10px'}}><WindowIcon/>&nbsp;Windows</IconButton>
            <IconButton sx={{color:'#2A2A2D' , fontSize:'16px' , padding:'10px'}}><FlutterDashOutlinedIcon/>&nbsp; Linux</IconButton>
            <IconButton sx={{color:'#2A2A2D' , fontSize:'16px' , padding:'10px'}}><WebhookIcon/>&nbsp;APIs</IconButton>
            </div>
            
            </div>
            </Box>
            </Container>
 
</div>
  </> 
 
    )
}

export default Main