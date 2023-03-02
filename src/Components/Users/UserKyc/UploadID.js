import React, { useState } from 'react'
import { TextField ,Button,IconButton} from '@mui/material'
import { Box,Container} from '@mui/system';
import User from '@mui/icons-material/AdminPanelSettingsOutlined';
import axios from 'axios'

const UploadID = () => {
  
  const [image,setimage] = useState();
  // console.log(image,12);
  
  const [response, setResponse] = useState(0)
  
  
  const HandleSubmit = () => {

    let name  = document.getElementById('name').value
    let adhar  = document.getElementById('adhar').value
    let phone  = document.getElementById('phone').value
    let pancard  = document.getElementById('pancard').value

  


    const submit = () => {

      const formdata = new FormData();
      formdata.append('name', name);
      formdata.append('adhar', adhar);
      formdata.append('phone', phone);
      formdata.append('pancard', pancard);
      formdata.append('image', image);
    
      axios.post('/userkyc', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          // console.log(response);
          // setResponse(response)
        })
        .catch((error) => {
          console.log(error);
        });
    };

    submit()
  
  }
  
  
  return (
    
    <>
      {/* <div>{ response}</div> */}
    <Box sx={{display:'flex', flexDirection:'column' , justifyContent:'space-around' , alignItems:'center', padding:'80px'}}>

        {/* <div style={{ margin: '12px' }}><TextField sx={{ input: { color: "#363C4E" } }} color="primary" size="small" id="" label="Full Name" variant="outlined" focused /></div>
         */}
    <div><IconButton><User sx={{color:'#EA661C' , height:'80px' , width:'80px'}} />  <Container sx={{color:'white', fontSize:'22px', paddingTop:'10px'}}>Complete Your KYC </Container></IconButton></div>

        <div>
<input type="text" id="name" placeholder={"Full Name"}  style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}} />
</div>

{/* 
        <div style={{ margin: '12px' }}><TextField sx={{ input: { color: "#363C4E" } }} color="primary" size="small" id="adhar" label="AdharCard Number" variant="outlined" focused /></div> */}
                <div>
<input type="number" id="adhar" placeholder={"Adhar Number"}  style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}} />
</div>

        {/* <div style={{ margin: '12px' }}><TextField sx={{ input: { color: "#363C4E" } }} color="primary" size="small" id="phone" label="Phone Number" variant="outlined" focused /></div> */}
        
        <div>
<input type="number" id="phone" placeholder={"Phone No."}  style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}} />
        </div>
        
{/* <div style={{margin:'12px'}}><TextField sx={{input:{color:"#363C4E"}}} color="primary"  size="small" id="pancard" label="PAN Number" variant="outlined" focused />
        </div> */}
        
        <div>
<input type="text" id="pancard" placeholder={"PanCard"}  style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}} />
        </div>
  
        
        <div style={{display:'flex'}}>

      
<div style={{margin:'12px'}}> <Button sx={{backgroundColor:'#EA661C'}} size="small" variant="contained" component="label">
  Upload ID
  <input id='img' hidden accept="image/*" onChange={(e) => setimage(e.target.files[0])} multiple type="file" />
</Button></div>
    
    
<div style={{margin:'12px', display:'flex'}}><Button sx={{backgroundColor:'#EA661C'}} size="small" onClick={HandleSubmit} variant="contained" component="label">Submit</Button></div>  </div>
    </Box>
    </>

  )
}

export default UploadID