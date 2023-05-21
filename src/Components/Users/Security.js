import React from 'react'
import Google2FA from './Google2FA'
import { Box, Button } from '@mui/material'
import Security2 from '@mui/icons-material/VerifiedUser';
import XXSe from '@mui/icons-material/SecurityOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
const Security = () => {
  return (
    <div>   <div style={{ height: '' }}>


      <Box sx={{ display: 'flex', height: '4vh', color: 'grey', fontSize: '11px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B202E' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}><Security2 sx={{ color: '#5661FF', fontSize: '16px' }} />&nbsp;Official website: https://www.bcex.io</Box>

      </Box>


      <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: '20px', height: '50vh', padding: '30px' }}>

        <div style={{
          fontSize: '20px', color: 'white', padding: '20px', backgroundColor: '#1B202E', width: '200px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>

          Enable OTP


          <Box><Button size='small'>enable</Button> <Button size='small'>learn more</Button></Box>
        </div>



        <div style={{
          fontSize: '20px', color: 'white', padding: '20px', backgroundColor: '#1B202E', width: '200px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>

          Google 2FA


          <Box><Button size='small'>enable</Button> <Button size='small'>learn more</Button></Box>
        </div>




        <div style={{
          fontSize: '20px', color: 'white', padding: '20px', backgroundColor: '#1B202E', width: '200px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>

          Email Auth


          <Box><Button size='small'>enable</Button> <Button size='small'>learn more</Button></Box>
        </div>



      </div>

    </div>

      <Box>

        <Box sx={{ display: 'flex', height: '4vh', color: 'grey', fontSize: '11px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B202E' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}><Security2 sx={{ color: '#5661FF', fontSize: '16px' }} />&nbsp;Official website: https://www.bcex.io</Box>

        </Box>
      </Box>


      <Box sx={{ padding: { sm: '60px', xs: '10px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '', flexDirection: { xs: 'column', sm: 'row' } }}>

        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>

          <p style={{ color: 'grey', fontSize: '13px', fontWeight: '100', lineHeight: '2', wordSpacing: '4' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vel non ipsum harum iusto vero vitae consequatur, mollitia placeat! Inventore porro iusto nobis nesciunt, commodi unde fugiat illo officiis vero excepturi molestiae, autem deleniti cumque illum obcaecati voluptatibus repellendus ipsam suscipit vitae corporis eveniet sapiente!
          </p>


        </Box>
        <Box ><XXSe sx={{ fontSize: '150px', color: '#5661FF' }} /></Box>

      </Box>



    </div>
  )
}

export default Security