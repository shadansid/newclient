import React , {useEffect,useState} from 'react'
import './css/UserPanel.css'
import Login from '../Components/Users/Login'
import UserHeader from '../Components/Users/UserHeader'
import {
    Link, Outlet 
  } from "react-router-dom";
import {Container,Box, Typography, Toolbar,IconButton, Button,Badge , Grid} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4Icon from '@mui/icons-material/Person4';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ArticleIcon from '@mui/icons-material/Article';
import SecurityIcon from '@mui/icons-material/Security';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SsidChartIcon from '@mui/icons-material/SsidChart';


const UserPanel = () => {
  
const [isLoggedIn, setLogin] = useState(true);
const [toggle, settoggle] = useState(false);

const togglebtn = ()=>{

if(toggle){
  settoggle(false)
}else{

  settoggle(true)
}

}



const hidetoggle = () =>{

  settoggle(false);


}



  return (
     <> {isLoggedIn && 
     <div style={{backgroundColor:'#171B26'}}>
  <UserHeader/>
  <Container sx={{height:'8vh'}}></Container>
 <div className="userpanel">
<Container sx={{width:'300px'}}></Container>

 <Container sx={{display:{xs:'none', sm:'block' , position:'fixed'}}} maxWidth="xl" style={{width:'300px', backgroundColor:'#171B26', height:'100vh' , borderRight:'1px solid #2A2F3F'}}>
   

   
   
  <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }} className='gridcontainer'>
 
 <Grid item xs={12} className='gridbox' sx={{  "&:hover": {
      background: "#18192B"
    }}} >
 <DashboardIcon style={{color:'#5442f2'}} />
 <Link style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/userdashboard'>Dashboard</Link>
 
 
 </Grid>
 
 <Grid item xs={12} className='gridbox' sx={{  "&:hover": {
      background: "#18192B"
    }}}>
 <Person4Icon style={{color:'#EA661C'}} />
 <Link style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/userkyc'>Profile</Link>
 </Grid>


 <Grid item xs={12} className='gridbox' sx={{  "&:hover": {
      background: "#18192B"
    }}} >
 <AccountBalanceWalletIcon style={{color:'#0082FC'}} />
 <Link style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/wallet'>Wallet</Link>
 </Grid>


 
 <Grid item xs={12} className='gridbox' sx={{  "&:hover": {
      background: "#18192B"
    }}}>
 <EqualizerIcon style={{color:'#19B6A4'}} />
 <Link  style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px' , marginLeft:'10px'}} to='/trade'>Buy Coins</Link>
 </Grid>
 
 <Grid item xs={12} className='gridbox' sx={{  "&:hover": {
      background: "#18192B"
    }}}>
 <ArticleIcon style={{color:'#1392DE'}}/>
 <Link  style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/tradehistory'>Trade History</Link>
 </Grid>

 <Grid item xs={12} className='gridbox' sx={{  "&:hover": {
      background: "#18192B"
    }}}>
 <RequestPageIcon style={{color:'#AEB5BB'}}/>
 <Link  style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/transactionhistory'>Transaction History</Link>
 </Grid>


 <Grid item xs={12} className='gridbox'sx={{  "&:hover": {
      background: "#18192B"
    }}} >
 <SecurityIcon style={{color:'#0082FC'}} />
 <Link style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/security'>Security</Link>
 </Grid>

 <Grid item xs={12} className='gridbox' sx={{  "&:hover": {
      background: "#18192B"
    }}}>
 <PersonAddIcon style={{color:'#22A3D0'}} />
 <Link style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/referral'>Referral</Link>
 
 
 </Grid>


 <Grid item xs={12} className='gridbox'sx={{  "&:hover": {
      background: "#18192B"
    }}} >
 <SsidChartIcon style={{color:'#0082FC'}} />
 <Link style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/chart'>Technical Analysis</Link>
 </Grid>


 <Grid item xs={12} className='gridbox' sx={{  "&:hover": {
      background: "#18192B"
    } }}>
 <PowerSettingsNewIcon style={{color:'#0082FC'}} />
 <Link style={{textDecoration:'none', color:'#7D8794' , fontSize:'16px',marginLeft:'10px'}} to='/Logout'>Logout</Link>
 </Grid>

<Link to='/airdropcontest'></Link>
</Grid>



 </Container>
 <Container maxWidth="xl" style={{backgroundColor:'#171B26'}} >
   <Container maxWidth="lg" style={{backgroundColor:'#171B26'}}>
   <Outlet />
   </Container>

 </Container>

 <Box sx={{display:{sm:'none', xs:'flex' , position:'fixed' , bottom:0, height:'55px' , width:window.innerWidth ,zIndex:5 , display:'flex' , flexDirection:'row',justifyContent:'space-between' , alignItems:'center' , boxShadow:'rgb(105 50 151) 2px 1px 2px 0px', padding:'10px'}}}>
 
 <Box>
  <DashboardIcon style={{color:'#5442f2'}} />
  </Box>
   
<Box>

<Person4Icon style={{color:'#EA661C'}} />
</Box>
<Box>
 <AccountBalanceWalletIcon style={{color:'#0082FC'}} />
 </Box>
<Box>
 <ArticleIcon style={{color:'#1392DE'}}/>
 </Box>


 
 </Box>
 </div> 
 </div> 
 }
 </>  
    )
}

export default UserPanel