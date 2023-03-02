import React, { useState } from 'react';
import './css/Registration.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button,Checkbox,Backdrop, Typography } from '@mui/material';
import TermsConditions from './TermsConditions'
import Vcode from './Vcode'
import { useNavigate } from 'react-router-dom';


export default function Registration() {
 
const [registered , setregister] = useState({})

const [validemail,setvalidemail] = useState(false)
const [validpass,setvalidpass] = useState(false)
const [notvalid,setnotvalid] = useState(true)

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


const navi =  useNavigate() 

const redirect =()=>{

  navi('/vcode')
}

if(registered.status === 200){

  redirect();

  

}


const register = ()=>{

let email = document.getElementById('xyzemail').value; 
let name = document.getElementById('xyzname').value; 
let pass = document.getElementById('xyzpass').value; 



const formdata = {

  name:name,
  email:email,
  password:pass,
  

}
 if(name==="" || email==="" || pass===""){


}

setInterval(()=>{
  setregister(false)

},3000)

setInterval(()=>{
  setnotvalid(true)

},3000)

if(validemail && validpass){
  fetch('/adduser', {
    method: 'POST',
    body:JSON.stringify(formdata),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) =>{  setregister(json) 
      // sessionStorage.setItem("accessToken",json.accesstoken) 
   
    });
  
  
}else{

  setnotvalid(false)

if(validemail){
  console.log(" Use Strong password")

}else{
console.log("Enter Valid email")

}

// console.log("use valid things")

}






}

// -----------------------------------------------handle Changes-------------------------------------------------------
const handleChangeEmail = (e) =>{

 
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(e.target.value.match(mailformat))
{

setvalidemail(true)

}
else
{
  setvalidemail(false)

}









}


const handleChangeName = (e) =>{


console.log(e)
}

const handleChangePass = (e) =>{

  var PassExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if(e.target.value.match(PassExpression)){

      setvalidpass(true)

  }else{
   
    setvalidpass(false)
  }



}

  return (
  
  
    <>
    <div className="Registration" style={{ 
      backgroundImage: `url("http://localhost:8800/static/images/lbg.jpeg")` 
    }}>
        
        
        
        
       
        <div className="regbox0">

      
           <div className="img">

               
              </div>

       <div className="regbox1">

           
          
         
           <div className="heading">Registration</div>
          
           <div id="regbox">
                   
                 

            
               
               <div className="aligndiv">
               <TextField onChange={handleChangeEmail}
        id="xyzemail" fullWidth placeholder='Email Address' margin='dense' 
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
<TextField onChange={handleChangeName}
        id="xyzname" placeholder='Full Name'
        label="Full Name" size="small" fullWidth  margin='dense' 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon style={{color:'#30CFD0'}} />
            </InputAdornment>
          ),
        }}variant="outlined"/>
</div>

<div className="aligndiv">
<TextField placeholder='Password' onChange={handleChangePass}
        id="xyzpass" fullWidth
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


               <div className="checkbox">

                  
            
               <Checkbox disabled checked size="small" style={{ color:'#30CFD0'}} /> <p style={{cursor:'pointer'}} onClick={handleToggle}>Accept the Terms and Conditions</p> </div>



               <Backdrop
  sx={{ color: '#000000' ,backgroundColor:'#ffffff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
  <TermsConditions></TermsConditions>
</Backdrop>


               <Button variant="outlined" onClick={register} style={{backgroundColor:'#30CFD0', color:'white'}} endIcon={<KeyboardArrowRightOutlinedIcon />}>Register</Button>


              
                {registered? <p  style={{ color:'#30CFD0', textAlign:'center', marginTop:'7px'}}>{registered.msg}</p>:<div></div>}
               
                {!(notvalid)? <p  style={{ color:'#30CFD0', textAlign:'center', marginTop:'7px'}}>Check Your Credentials</p>:<div></div>}


             
               
              
               

           </div>
       </div>

   </div>  


</div>

    </>




  )
}
