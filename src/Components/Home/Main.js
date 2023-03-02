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
import WebhookIcon from '@mui/icons-material/Webhook';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';

const Main = () => {
  return (
 <>
  <Container sx={{backgroundColor:''}}>
    
    <Container sx={{display:'flex' , alignItems:'center' , paddingTop:'100px'}}>

    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'' , gap:'20px'}}>
    <div style={{fontSize:'52px' , color:'#2A2A2D' , fontWeight:'900' , fontFamily:'Verdana'}}>Buy & Sell Instantly And Hold Cryptocurrency</div>
   
    <div style={{fontSize:'14px' ,color:'grey'}}>BCEX Exchange is such a marketplace where people can trade directly with each othe.</div>
    <div><Button sx={{padding:'15px' , backgroundColor:'orange'}} variant='contained'>Register Now</Button></div>

    </Box>
    <Box>

      <img src="http://localhost:8800/static/images/banner3.png" height="400px" width="500px"></img>



    </Box>
    </Container>

      <Box sx={{ display:'flex' , gap:'20px' , paddingTop:'80px'}}>

          <div><img src="http://localhost:8800/static/images/vox/1.png" height="170px" width="250px" alt="" /></div>
          <div><img src="http://localhost:8800/static/images/vox/2.jpg" height="170px" width="250px" alt="" /></div>
          <div><img src="http://localhost:8800/static/images/vox/3.png" height="170px" width="250px" alt="" /></div>
          <div><img src="http://localhost:8800/static/images/vox/4.png" height="170px" width="250px" alt="" /></div>
 </Box>
<Box sx={{display:'flex' , flexDirection:'column' , gap:'20px' , fontSize:'16px' , color:'grey'}}>
  <div>Special Notice About Tradexpro Markets Limited</div>
  <div>Tradexpro Collect & Win Christmas Edition: Trade TRX, BTT, WIN, JST or SUN to Light Up the Christmas Tree & Share $300k in Rewards!</div>
</Box>

<Box sx={{paddingTop:'50px',paddingBottom:'50px' , fontSize:'32px', color:'#2A2A2D', fontWeight:'800'}}>Market Trend</Box>


<Container>
<CoinDatah></CoinDatah>

</Container>


<Box sx={{paddingTop:'50px',paddingBottom:'50px',fontSize:'32px', color:'#2A2A2D',fontWeight:'800'}}>Trade Anywhere</Box>


<Box sx={{display:'flex'}}>
<div><img src="http://localhost:8800/static/images/banner4.png" width="600px" height="500px" alt="" /></div>
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



<Box sx={{padding:{xs:'50px',sm:'120px'},margin:'50px', background:`url("http://64.227.140.80/api/static/images/bg/app.png")`, backgroundSize:'cover' , backgroundPosition:'center', display:'flex',height:'100vh', color:'white'  }}>

<div  style={{width:'50%'}}>
<div style={{color:'grey', fontSize:'35px', lineHeight:'1'}}>Install Mobile App and earn on the go with a million crypto pioneers</div>
<div style={{padding:'10px'}}/>
 <p style={{color:'grey', fontSize:'16px'}}>Never miss a new token with new launches, free Airdrops and price alerts.</p>

</div>

<div style={{width:'50%'}}>

</div>




</Box>



{/* =====================================================end */}
  </Container>
 

  </> 
 
    )
}

export default Main