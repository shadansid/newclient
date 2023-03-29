import React from 'react'
import { Button,Box } from '@mui/material'
import {useNavigate} from 'react-router-dom'
const Page1 = () => {
    const navigate = useNavigate()
    
    
    const Next = () => {
        setTimeout(() => {
          navigate('/userpanel/userdashboard')

       },3000)
      

  }
  
  
    return (
       <>
    <div style={{height:'100vh' , backgroundColor:'#171B26' ,paddingLeft:'200px',paddingRight:'200px' , paddingTop:'70px'}}>
    <div style={{display:"flex",alignItems:'center', justifyContent:'center', flexDirection:'column',gap:'3', height:'80vh' , border:'1px solid grey'}}>
    
    <div style={{fontSize:'20px',color:'white',padding:'20px'}}>
      
Page 3     </div>

      <div><input type="text" placeholder='Backup Email'  style={{height:"20px", backgroundColor:'transparent' , border:'1px solid grey', padding:'20px' , margin:'10px'}}   /></div>
      <div><input type="text" placeholder='Backup Phone'style={{height:"20px",backgroundColor:'transparent',border:'1px solid grey', padding:'20px' , margin:'10px'}} /></div>
      <div><input type="text" placeholder='Optional Message' style={{backgroundColor:'transparent',border:'1px solid grey', padding:'20px' , margin:'10px'}} /></div>
      
    <div>
       <Button onClick={Next} sx={{marginTop:'10px'}} variant="contained">Submit</Button>
      </div>
      
    </div>

    </div>
  
  
  </>
  )
}

export default Page1