import React, { useEffect, useState ,useRef} from 'react'
import './css/UserPanel.css'
import Login from '../Components/Users/Login'
import UserHeader from '../Components/Users/UserHeader'
import { useContext, useReducer } from 'react'
import Context from '../hooks/useTheme2'
import { Link, Outlet } from 'react-router-dom'
import {
  Container,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Grid,
} from '@mui/material'

import DashboardIcon from '@mui/icons-material/GridViewOutlined'
import Person4Icon from '@mui/icons-material/Person4Outlined';
import EqualizerIcon from '@mui/icons-material/SsidChartOutlined';
import RequestPageIcon from '@mui/icons-material/AssignmentOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import SecurityIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import TradeNow from '@mui/icons-material/GraphicEq'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UserPanel = () => {
  const navilogout = useNavigate()
    const [isLoggedIn, setLogin] = useState('invalid')
  const [toggle, settoggle] = useState(false)


  const div1Ref = useRef(null);
  const div2Ref = useRef(null);








  useEffect(() => {

    const check = async () => {

   const response = await axios.get('/checklogin')
      setLogin(response.data.msg)

      if (response.data.status === 200) {

      } else {
        navilogout('/login');
      }


    }
    check()



  },[isLoggedIn])













  const togglebtn = () => {
    if (toggle) {
      settoggle(false)
    } else {
      settoggle(true)
    }
  }

  const hidetoggle = () => {
    settoggle(false)
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return action.payload
      default:
        throw new Error()
    }
  }

  useEffect(() => {
    const div2Width = div2Ref.current.clientWidth; // Get the width of div 2
    div1Ref.current.style.width = `${div2Width}px`; // Set the width of div 1 to be equal to div 2
  }, []);



  const [state, dispatcher] = useReducer(reducer, { color: 0 })

  return (
    <>
      <Context.Provider
        value={{
          color: state.color,
          dispatcher: dispatcher,
        }}
      >
        {isLoggedIn && (
          <div style={{ backgroundColor: state.color }}>
            <UserHeader />
            <Container sx={{ height: '7vh' }}></Container>
            <div className="userpanel">
              <Container ref={div1Ref}
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  width: '20%',
                  backgroundColor: '',
                  marginRight:'50px'
                }}
              ></Container>

              <Container
               ref={div2Ref}  sx={{ display: { xs: 'none', sm: 'flex', position: 'fixed' } }}
                maxWidth="xl"
                style={{
                  width: '20%',
                  background: (state.color=='#ffffff'? 'linear-gradient(to bottom, #325469, #7192A8)':'linear-gradient(to bottom, #171B26, #152136)'),
                  height: '100vh',
                  borderRight:
                    state.color == '#ffffff'
                      ? '1px solid #E7E7E8'
                      : '1px solid #2A2F3F',
                  flexDirection: 'column',
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  rowSpacing={1}
                  columnSpacing={{ xs: 3, sm: 2, md: 3 }}
                  className="gridcontainer"
                >
                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <DashboardIcon style={{ color: '#939ba9' , fontSize:'18px' }} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/userpanel/userdashboard"
                    >
                      Dashboard
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <Person4Icon style={{color: '#939ba9' , fontSize:'18px'}} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/userpanel/userkyc"
                    >
                      Profile
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <AccountBalanceWalletIcon style={{ color: '#939ba9' , fontSize:'18px' }} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/userpanel/wallet"
                    >
                      Wallet
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <EqualizerIcon style={{ color: '#939ba9' , fontSize:'18px' }} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/trade"
                    >
                      Buy Coins
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <ArticleIcon style={{ color: '#939ba9' , fontSize:'18px' }} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/userpanel/tradehistory"
                    >
                      Trade History
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <RequestPageIcon style={{ color: '#939ba9' , fontSize:'18px' }} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/userpanel/transactionhistory"
                    >
                      Transaction History
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <SecurityIcon style={{ color: '#939ba9' , fontSize:'18px'}} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/userpanel/security"
                    >
                      Security
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <PersonAddIcon style={{color: '#939ba9' , fontSize:'18px' }} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/userpanel/referral"
                    >
                      Referral
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <SsidChartIcon style={{ color: '#939ba9' , fontSize:'18px' }} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/chart"
                    >
                      Technical Analysis
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className="gridbox"
                    sx={{
                      '&:hover': {
                        background:
                          state.color == '#ffffff' ? '#43728fff' : '#18192B',
                      },
                    }}
                  >
                    <PowerSettingsNewIcon style={{ color: '#939ba9' , fontSize:'18px' }} />
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: (state.color =='#ffffff'? 'white': '#7D8794'),
                        fontSize: '14px',
                        marginLeft: '10px',
                      }}
                      to="/Logout"
                    >
                      Logout
                    </Link>
                  </Grid>

                  <Link to="/airdropcontest"></Link>
                </Grid>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'fixed',
                    bottom: '10px',
                    left: '1px',
                    alignItems: 'center',
                  }}
                >
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'grey',
                      fontSize: '14px',
                    }}
                  >
                    Need Help?
                  </Link>
                </Box>
              </Container>
              <Box
                sx={{ width: window.innerWidth }}
                maxWidth="xl"
                style={{ backgroundColor: state.color, border: '' }}
              >
                <Box
                  maxWidth="lg"
                  sx={{
                    backgroundColor: state.color =='#ffffff'?'#ebedef':'#171b26',
                    display: { xs: 'block', sm: 'none' },
                  }}
                >
                  <Outlet />
                </Box>

                <Box
                  maxWidth="lg"
                  sx={{
                    backgroundColor: state.color =='#ffffff'?'#ebedef':'#171b26',
                    display: { xs: 'none', sm: 'block' },paddingLeft:'20px'
                  }}
                >
                  <Outlet />
                </Box>
              </Box>

              {/* mobo=============================================================== */}
              <Box
                sx={{
                  display: {
                    sm: 'none',
                    xs: 'flex',
                    position: 'fixed',
                    bottom: 0,
                    height: '55px',
                    width: window.innerWidth,
                    zIndex: 5,
                    display: 'flex',
                    backgroundColor:
                      state.color == '#ffffff' ? '#f9f9f9' : '#171B26',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: 'rgb(105 50 151) 2px 1px 2px 0px',
                    padding: '10px',
                    borderTop:
                      state.color == '#ffffff'
                        ? '1px solid #E7E7E8'
                        : '1px solid #363c4e',
                  },
                }}
              >
                <Box>
                  {/* <DashboardIcon style={{ color: '#5442f2' }} /> */}
                  <Link
                    to="/userpanel/userdashboard"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton
                      sx={{
                        color: '#7D8794',
                        fontSize: '16px',
                        padding: '10px',
                      }}
                    >
                      <DashboardIcon
                        sx={{ color: '#7D8794', fontSize: '18px' }}
                      />
                    </IconButton>
                  </Link>
                </Box>

                <Box>
                  <Link
                    to="/userpanel/userkyc"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton
                      sx={{
                        color: '#7D8794',
                        fontSize: '16px',
                        padding: '10px',
                      }}
                    >
                      <Person4Icon
                        sx={{ color: '#7D8794', fontSize: '18px' }}
                      />
                    </IconButton>
                  </Link>
                </Box>
                <Box>
                  <Link to="/trade" style={{ textDecoration: 'none' }}>
                    <IconButton
                      sx={{
                        color: '#7D8794',
                        fontSize: '16px',
                        padding: '10px',
                      }}
                    >
                      <TradeNow sx={{ color: '#7D8794', fontSize: '18px' }} />
                    </IconButton>
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/userpanel/wallet"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton
                      sx={{
                        color: '#7D8794',
                        fontSize: '16px',
                        padding: '10px',
                      }}
                    >
                      <AccountBalanceWalletIcon
                        sx={{ color: '#7D8794', fontSize: '18px' }}
                      />
                    </IconButton>
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/userpanel/tradehistory"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton
                      sx={{
                        color: '#7D8794',
                        fontSize: '16px',
                        padding: '10px',
                      }}
                    >
                      <ArticleIcon
                        sx={{ color: '#7D8794', fontSize: '18px' }}
                      />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            </div>
          </div>
        )}
      </Context.Provider>
    </>
  )
}

export default UserPanel