import React from 'react'
import { Box } from '@mui/material'

const TwoBoxes = () => {
  return (
    <>
    
    <Box sx={{ display: {sm:'flex',xs:'none'}, justifyContent: '', gap: '20px',padding:{xs:'20px'}, flexWrap:{xs:'wrap',sm:'nowrap'}}}>

    
              <Box sx={{ backgroundColor: "#1C2230", display: 'flex', alignItems: '', flexDirection: 'column', padding: '20px', borderRadius: '9px', boxShadow: '1px -2px 14px -1px black', width: '100%' }}>
              
                  <Box sx={{ color: 'cornflowerblue', fontSize: '16px', paddingBottom:'10px'}}> Total Desposit</Box>
                  <Box sx={{color:'grey', fontSize:'16px'}}>  $ 569.87</Box>
              
              </Box>


              <Box sx={{ backgroundColor: "#1C2230", display: 'flex', alignItems: '', flexDirection: 'column', padding: '20px', borderRadius: '9px', boxShadow: '1px -2px 14px -1px black', width: '100%' }}>
                  
              <Box sx={{ color: 'cornflowerblue', fontSize: '16px', paddingBottom:'10px'}}> Total Withdraw</Box>
                  <Box sx={{color:'grey', fontSize:'16px'}}>  $ 206.55</Box>
                </Box>
                
              <Box sx={{ backgroundColor: "#1C2230", display: 'flex', alignItems: '', flexDirection: 'column', padding: '20px', borderRadius: '9px', boxShadow: '1px -2px 14px -1px black', width: '100%' }}>
                  
              <Box sx={{ color: 'cornflowerblue', fontSize: '16px', paddingBottom:'10px'}}> Total Balance</Box>
                  <Box sx={{color:'grey', fontSize:'16px'}}>  $ 359.09</Box>
                </Box>


              <Box sx={{ backgroundColor: "#1C2230", display: 'flex', alignItems: '', flexDirection: 'column', padding: '20px', borderRadius: '9px', boxShadow: '1px -2px 14px -1px black', width: '100%' }}>
                  
              <Box sx={{ color: 'cornflowerblue', fontSize: '16px', paddingBottom:'10px'}}> Total Profit</Box>
                  <Box sx={{color:'grey', fontSize:'16px'}}>  12%</Box>
</Box>



</Box>
      
      </>
  )
}

export default TwoBoxes