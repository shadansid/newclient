import React from 'react';
import UploadID from './UploadID';
import {Container, Typography, Toolbar,IconButton, Button,Badge,
    Box, Step, Stepper, StepLabel,StepButton
} from '@mui/material'

const steps = [
    'Complete your Profile',
    'Upload ID',
    'Submit for Verification',
  ];

const UserKyc = () => {
    
 
 
    return (
 
      <>
        < Container sx={{ display: 'flex',height:'100vh', justifyContent: 'center', alignItems: 'center' }}>
          <Container>

        
 
  <Container style={{marginTop:'30px' , padding:'20px',height:'80vh' , border:'1px solid #2A2F3F'}}>

  
  {/* <Box sx={{ width: '100%', color:'white' }}>
      <Stepper sx={{color:'white'}} activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step sx={{color:'white'}} key={label}>
            <StepLabel sx={{color:'white'}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box> */}

<UploadID></UploadID>

  </Container>
  </Container>
  </Container>
  </>
 
 
 
    )
}

export default UserKyc