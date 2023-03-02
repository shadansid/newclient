import React, { useState } from 'react'
import Facebook from '@mui/icons-material/FacebookOutlined';
import { Button,Alert } from '@mui/material'
import Gift from '@mui/icons-material/CardGiftcard';
import Gift2 from '@mui/icons-material/CardGiftcardTwoTone';
import  { useRef } from 'react';
import { borderRadius } from '@mui/system';
const Referral = () => {
 
  const inputRef = useRef(null);









  function myFunction() {

    var copyText = document.getElementById("myInput");

  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // alert("Copied the text: " + copyText.value);

    setShow(1)
    setTimeout(() => {
      setShow(0)
    }, 1000);


  }


  const [show, setShow] = useState(0)
  



    return (
    
      <>
        
      <div style={{height:'100vh', display:'flex',alignItems:'center', justifyContent:'center', overflow:'none'}}>
      <div style={{display:"flex",alignItems:'center', justifyContent:'center', flexDirection:'column', height:'80vh' , border:'1px solid #2A2F3F' , padding:'50px'}}>
      <Gift sx={{color:'#EA661C', height:'80px', width:'80px'}}/>
      <div style={{fontSize:'20px',color:'white',padding:'20px'}}>
        
         Refer and Earn Upto <span style={{color:'#EA661C'}}> Rs.1000 Cash </span>
        </div>
        
        <div style={{fontSize:'20px',color:'white',padding:'20px', display:'flex',flexDirection:'column'}}>
        
<input type="text" id="myInput"  disabled  value="https://bcex.com/user?value=98899/referid?" style={{background:'transparent',padding:'10px',width:'48ch' , border:'1px solid #EA661C'}} />

    <Button id="copy" onClick={myFunction} style={{ background: '#EA661C', padding: '5px', width: '51ch', color:'white' ,borderRadius:'0px' }} >Copy Code</Button>

            
            </div>

       
    
            <div style={{display:'flex', gap:'10px'}}>
              


        
      <div>
      <a style={{textDecoration:'none', color:'white'}} href="https://api.whatsapp.com/send?phone=+919810946956&text=Join BCEX using this link : https://bcex.com/newuser?!" target="_blank">
        <Button sx={{backgroundColor:'#EA661C'}} variant="contained">WhatsApp</Button>
</a>
            </div>
            

            <div>
      <a style={{textDecoration:'none', color:'white'}} href="https://www.facebook.com/sharer/sharer.php?" target="_blank">
        <Button sx={{backgroundColor:'#EA661C'}} variant="contained">FaceBook</Button>
</a>
        </div>
        
    
        <div>
      <a style={{textDecoration:'none', color:'white'}} href="https://t.me/mytelegramaccount" target="_blank">
        <Button sx={{backgroundColor:'#EA661C'}} variant="contained">Telegram</Button>
</a>
        </div>
        </div>
    
    
           
            {show ? <div style={{position:'fixed', top:'0', right:'0',bottom:'0',left:'0',margin:'auto', backgroundColor:'rgb(23 27 38 / 85%)', display:'flex', justifyContent:'center', alignItems:'center'}}><Alert sx={{backgroundColor:'#1B202E' , color:'white' , padding:'20px' , boxShadow:'1px 1px -2px '}} severity="success">Referral Code Copied !</Alert></div> : <></>}
  
    
    
    
          </div>

      </div>
        </>



  )
}

export default Referral