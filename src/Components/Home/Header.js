import React, { useState,useEffect } from 'react'
import {Container, Typography, Toolbar,IconButton, Button,Badge, Box} from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LoginIcon from '@mui/icons-material/Login';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import Light from '@mui/icons-material/LightModeOutlined';
import axios from 'axios';
import {
  Link, Outlet 
} from "react-router-dom";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { fontWeight } from '@mui/system';
import UserHeader from '../Users/UserHeader';
const Header = () => {
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

const [isLoggedIn, setLogin] = useState(0);


useEffect(() => {
  axios.get('http://64.227.140.80/api/checklogin')
  .then(function (response) {
     
      setLogin(response.data.status);
      
      // if(isLoggedIn != 200 ){
      //     navilogout('/');
      // }
      

  })


})


  
const [color, setColor] = useState('#171B26')
  const Theme = () => {

    if (color === '#171B26') {
      
      setColor('#ffffff')
    } else {
      setColor('#171B26')
    }



  }




    return (

<>
  <Container sx={{display:'flex', alignItems:'center' , justifyContent:'center' , height:'10vh', backgroundColor:color}}>
  
        <div  style={{width:"50%"}}><img src="http://localhost:8800/static/images/logo.png" height="45px" width="110px" alt="" /></div>

        <div style={{display:'flex', fontColor:'grey',alignItems:'center',width:"50%", height:'50px' , justifyContent:'space-around'}}> 
         
        
        <Typography >
<Link to='/trade' style={{textDecoration:'none'}}><IconButton sx={{color:'grey' , fontSize:'16px' , padding:'10px'}}>Trade</IconButton></Link>
</Typography>

<Typography >
<Link to='/login' style={{textDecoration:'none'}}><IconButton sx={{color:'grey' , fontSize:'16px' , padding:'10px'}}>Login</IconButton></Link>
</Typography>

<Typography >
<Link to='/registration' style={{textDecoration:'none'}}><IconButton sx={{color:'grey' , fontSize:'16px' , padding:'10px'}}>Sign Up</IconButton></Link>
</Typography>


<Typography >
<Link to='' style={{textDecoration:'none'}}><IconButton  sx={{color:'grey' , fontSize:'16px' , padding:'10px'}}>  {color==='#171B26'?<Light onClick={Theme} ></Light>:<DarkModeOutlinedIcon onClick={Theme}/>}  </IconButton></Link>
</Typography>



<Typography >
<Link to='' style={{textDecoration:'none'}}><IconButton sx={{color:'grey' , fontSize:'16px' , padding:'10px'}}>ENG</IconButton></Link>
</Typography>




        </div>

   

  </Container>

</>

    )


}


export default Header