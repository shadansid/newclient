import React from 'react'
import { Button } from '@mui/material'

const RequestCall = () => {
  return (
    <>
         
         
      <div style={{height:'100vh' , backgroundColor:'#171B26' ,paddingLeft:'200px',paddingRight:'200px' , paddingTop:'70px'}}>
      <div style={{display:"flex",alignItems:'center', justifyContent:'center', flexDirection:'column',gap:'3', height:'80vh' , border:'1px solid grey'}}>
      
      <div style={{fontSize:'20px',color:'white',padding:'20px'}}>
        
Need Help ? Request a Callback        </div>

        <div><input type="text" placeholder='Name'  style={{height:"20px", backgroundColor:'transparent' , border:'1px solid grey', padding:'20px' , margin:'10px'}}   /></div>
        <div><input type="text" placeholder='Phone Number'style={{height:"20px",backgroundColor:'transparent',border:'1px solid grey', padding:'20px' , margin:'10px'}} /></div>
        <div><input type="text" placeholder='Message' style={{backgroundColor:'transparent',border:'1px solid grey', padding:'20px' , margin:'10px'}} /></div>
        
      <div>
         <Button sx={{marginTop:'10px'}} variant="contained">Request a CallBack</Button>
        </div>
        
      </div>

      </div>
    
    
    </>
  )
}

export default RequestCall