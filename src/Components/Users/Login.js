import React, { useState } from 'react';
import './css/Login.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button,Checkbox , Divider } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function Login() {
 
  const [logined, setlogined] = useState({})
 
  const navilogin =  useNavigate() 

  const redirectlogin =()=>{
  
    navilogin('/userpanel/userdashboard')
  }
  
  if(logined.status === 200){
  

    redirectlogin();

    
  
  }
  


  
const Login = ()=>{

let email = document.getElementById('xyzlemail').value; 
let pass = document.getElementById('xyzlpass').value; 


const loginData = {

  email:email,
  password:pass,
  }
 


fetch('/login', {
  method: 'POST',
  body:JSON.stringify(loginData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => { 
    setlogined(json)
    sessionStorage.setItem("accessToken",json.accesstoken) });





}

// -----------------------------------------------handle Changes-------------------------------------------------------
const handleChangeEmail = (e) =>{

 
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(e.target.value.match(mailformat))
{
console.log("Valid email address!");

}
else
{
console.log("You have entered an invalid email address!");

}









}




  return (
  
  
    <>
    <div className="Registration">
        
        
        
        
       
        <div className="regbox0">

      
           <div className="img">

               
              </div>

       <div className="regbox1">

           
          
         
           <div className="heading">Login</div>
          
           <div id="regbox">
                   
                 

            
               
               <div className="aligndiv">
               <TextField onChange={handleChangeEmail}
        id="xyzlemail" fullWidth placeholder='Email Address' margin='dense' 
        label="Email" size="small" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon style={{color:'#30CFD0'}} />
            </InputAdornment>
          ),type:"email"
        }}variant="outlined"/>
 </div>

 

<div className="aligndiv">
<TextField placeholder='Password' 
        id="xyzlpass" fullWidth
        label="Password" size="small"
        margin='dense'
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenOutlinedIcon style={{color:'#30CFD0'}}/>
            </InputAdornment>
          ), type:"password"
        }}variant="outlined"/>
</div>


               

               <Button sx={{m:1}} variant="outlined" onClick={Login} style={{backgroundColor:'#30CFD0', color:'white'}} endIcon={<KeyboardArrowRightOutlinedIcon />}>Login</Button>
               {logined? <p  style={{ color:'#30CFD0', textAlign:'center', marginTop:'7px'}}>{logined.msg}</p>:<div></div>}
           </div>
       </div>

   </div>  
<Divider></Divider>

</div>

    </>




  )
}
