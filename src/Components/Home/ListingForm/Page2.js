import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button,Box } from '@mui/material'
const Page1 = () => {
    const navigate = useNavigate()
    
    
    const Next = () => {
        navigate('/reqcall/page3')
      

  }
  
  
    return (
       <>
    <div style={{height:'100vh' , backgroundColor:'#171B26' ,paddingLeft:'200px',paddingRight:'200px' , paddingTop:'70px'}}>
    <div style={{display:"flex",alignItems:'center', justifyContent:'center', flexDirection:'column',gap:'3', height:'80vh' , border:'1px solid grey'}}>
    
    <div style={{fontSize:'20px',color:'white',padding:'20px'}}>
      
Page 2      </div>

      <div><input type="text" placeholder='Token Name'  style={{height:"20px", backgroundColor:'transparent' , border:'1px solid grey', padding:'20px' , margin:'10px'}}   /></div>
      <div><input type="text" placeholder='Token Expected Amount'style={{height:"20px",backgroundColor:'transparent',border:'1px solid grey', padding:'20px' , margin:'10px'}} /></div>
      <div><input type="text" placeholder='Reason of List' style={{backgroundColor:'transparent',border:'1px solid grey', padding:'20px' , margin:'10px'}} /></div>
      
    <div>
       <Button onClick={Next} sx={{marginTop:'10px'}} variant="contained">Set 2</Button>
      </div>
      
    </div>

    </div>
  
  
  </>
  )
}

export default Page1