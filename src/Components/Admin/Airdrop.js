import React from 'react'
import './css/Airdrop.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Input, Button, IconButton } from '@mui/material';
const Airdrop = () => {
  return (
   
    <>
    <div style={{padding:'10px', color:'rgba(0, 0, 0, 0.34)',fontSize:'28px'}}>Airdrop</div>
    <div id="Airdrop">

     <form action="/airdrop" method='POST' encType='multipart/form-data'>
     <div>
<input type="text" id="adhar" placeholder={""}  style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}} />
</div>
      
      <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden name='airdrop' accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
<input type="submit" id='btn' />
      

    </form>
    </div>
    
    

    
    
    </>


  )
}

export default Airdrop