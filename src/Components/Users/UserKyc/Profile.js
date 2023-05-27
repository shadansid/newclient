import React, { useState, useEffect } from 'react'
import { Container, Box, Button } from '@mui/material'
import User6 from '@mui/icons-material/AccountCircle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = ({ bg }) => {
  const [user, setUser] = useState(0)
  const navigate = useNavigate()

  
  useEffect(() => {
    axios
      .get('/userprofile')
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {}
  }, [])

  return (
    <>
      <div
        style={{
          backgroundColor: (bg == '#ffffff'? '#ebedef':'#171b26'),

          width: { xs: window.innerWidth },
        }}
      >
        <Container
          sx={{
            backgroundColor: bg == '#ffffff' ? '#f7f7f7' : '#1C2230',
            color: 'white',
            margin: '20px',
            width: 'auto',
            height: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: '',
            gap: { sm: '20px', xs: '10px' },
            boxShadow: '1px 2px 9px -5px black',
            padding: '10px',
            display: { xs: 'none', sm: 'flex', borderRadius: '9px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: '10px',
              alignItems: 'center',
            }}
          >
            <Box>
              {' '}
              <User6
                sx={{ color: 'grey', fontSize: { sm: '70px', xs: '30px' } }}
              />
            </Box>
            <Box sx={{ marginLeft: '-29px' }}>
              <Box></Box>
              <Box sx={{ marginTop: '25px' }}>
                <img
                  src="http://153.92.223.84/api/static/images/levels/basic.png"
                  height={'40px'}
                  width={'40px'}
                  alt=""
                />
              </Box>
            </Box>
          </Box> 

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'grey', fontSize: '10px' }}>User ID :</div>
            <Box sx={{ fontSize: '12px', color: '#cdcdcd' }}>
              {user && user[0].userid}
            </Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'grey', fontSize: '10px' }}>User Name :</div>
            <Box sx={{ fontSize: '12px', color: '#cdcdcd' }}>
              {user && user[0].Name.toUpperCase()}
            </Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'grey', fontSize: '10px' }}>Email :</div>
            <Box sx={{ fontSize: '12px', color: '#cdcdcd' }}>
              {user && user[0].email}
            </Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'grey', fontSize: '10px' }}>Account Type</div>
            <Box sx={{ fontSize: '12px', color: '#cdcdcd' }}>Regular</Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'grey', fontSize: '10px' }}>Last Login :</div>
            <Box sx={{ fontSize: '12px', color: '#cdcdcd' }}>
              {user && user[0].lastlogin}
            </Box>
          </Box>

          
        </Container>
      </div>
    </>
  )
}

export default Profile
