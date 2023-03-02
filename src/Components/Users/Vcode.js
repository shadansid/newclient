import React, { useState } from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PasswordIcon from '@mui/icons-material/Password';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button,Checkbox , Divider } from '@mui/material';



export default function Vcode() {
 
 const [vvcode, setvvcode]=useState()

  const navivcode =  useNavigate() 

  const redirectcode =()=>{
  
    navivcode('/userpanel/userdashboard')
  }
  
  


 
const Login = ()=>{

let vcode = document.getElementById('xyzlemail').value; 



const codeData = {

  code:vcode
 
  }
 


fetch('/verifyuser', {
  method: 'POST',
  body:JSON.stringify(codeData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {console.log(json)
  setvvcode(json)

if(vvcode.status === 200){
  
    redirectcode();
  
    
  
  }


  
  });





}

// -----------------------------------------------handle Changes-------------------------------------------------------z




  return (
  
  
    <>
    <div className="Registration">
        
        
        
        
       
        <div className="regbox0" style={{flexDirection:'column'}}>
<p style={{lineHeight:3 , fontSize:'20px' , color:'#5E5E5E'}}>We've Sent the Code to your Email address.</p>
      
           <div className="img">

               
              </div>

       <div className="regbox1">

           
          
         
           <div className="heading">Verify</div>
          
           <div id="regbox">
                   
                     
               <div className="aligndiv">
               <TextField 
        id="xyzlemail" fullWidth placeholder='Code' margin='dense' 
        label="Email" size="small" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon style={{color:'#30CFD0'}} />
            </InputAdornment>
          ),type:"number"
        }}variant="outlined"/>
 </div>

               <Button sx={{m:1}} variant="outlined" onClick={Login} style={{backgroundColor:'#30CFD0', color:'white'}} endIcon={<KeyboardArrowRightOutlinedIcon />}>Submit</Button>

           </div>
       </div>

   </div>  
<Divider></Divider>

</div>

    </>




  )
}
