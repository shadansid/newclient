import React from 'react'
import { Box } from '@mui/material'
const Boxes = () => {
  return (
      
      
      
      <>
               <Box sx={{ padding: '60px' ,display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#f2f2f2'}}>
          

          <div style={{display:'flex', alignItems:'center', gap:'20px', flexWrap:'wrap'}}>


            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="http://localhost:8800/static/images/vox/1.png"  height='150px' width='300px' alt="" />
                </div>
            <div style={{width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
            <img src="http://localhost:8800/static/images/vox/2.jpg"   height='150px' width='300px'  alt="" />
                </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
            <img src="http://localhost:8800/static/images/vox/3.png"  height='150px' width='300px'  alt="" />
                </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
            <img src="http://localhost:8800/static/images/vox/4.png"  height='150px' width='300px' alt="" />
                </div>
                

          </div>


        </Box>


      </>
  )
}

export default Boxes