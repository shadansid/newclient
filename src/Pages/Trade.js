import React, { useReducer, useContext } from 'react'
import CoinListBox from '../Components/Users/Coindata/CoinListBox'
import Chart from '../Components/Users/Coindata/Chart'
import BuyCoin from '../Components/Users/Coindata/BuyCoin'
import UserHeader from '../Components/Users/UserHeader'
import StableConnection from '../Components/Users/StableConnection'
import CoinData from '../Components/Users/Coindata/CoinData'
import TradeHistory from '../Components/Users/TradeHistory'
import BuyOrder from '../Components/Users/BuyOrder'
import SellOrder from '../Components/Users/SellOrder'
import { SellCoin } from '../Components/Users/Coindata/SellCoin'
import { useEffect, useState } from 'react'
import './css/Trade.css'
import { Box, Container, IconButton } from '@mui/material'

import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'
import Addmoney from '../Components/Users/Wallet/Addmoney'
import Context from '../hooks/useCoin'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Person4Icon from '@mui/icons-material/Person4'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import RequestPageIcon from '@mui/icons-material/RequestPage'
import ArticleIcon from '@mui/icons-material/Article'
import SecurityIcon from '@mui/icons-material/Security'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import Data24hr from '../Components/Users/Data24hr'
import Showwallet from '../Components/Users/Wallet/Showwallet'
import OpenOrder from '../Components/Users/OpenOrder'
import OrderHistory from '../Components/Users/OrderHistory'
import CustomChart from '../Components/Users/CustomChart'
import Loading from '../Components/Loading'
import TradeNow from '@mui/icons-material/GraphicEq'
import Context2 from '../hooks/useTheme2'

import { Outlet, Link, NavLink } from 'react-router-dom'

const Trade = () => {
  const [size, setsize] = useState(0)
  useEffect(() => {
    let size = document.getElementById('middlebox').offsetWidth
    setsize(size)
  }, [])

  const [coins, setCoins] = useState([])

  const handleCoinChange = (coin) => {
    setCoins(coin)
  }
  const [loader, setLoader] = useState(1)
  useEffect(() => {
    setLoader(0)
  }, [])

  // toglee
  const [buyactive, setbuyactive] = useState(0)
  const [sellactive, setsellactive] = useState(0)
  const BuyToggleBtn = () => {
    setbuyactive(1)
  }

  // Active Color
  const [changeColor, setchangeColor] = useState(1)
  const changecolor1 = () => {
    setchangeColor(1)
  }

  const changecolor2 = () => {
    setchangeColor(0)
  }
  // Active Color

  const SellToggleBtn = () => {
    setbuyactive(1)
  }

  const toggleClose = () => {
    setbuyactive(0)
    setsellactive(0)
  }

  // ijdjojioj4oifjoijioj4i3f
  // ijdjojioj4oifjoijioj4i3f

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return action.payload
      default:
        throw new Error()
    }
  }

  const [state, dispatcher] = useReducer(reducer, {
    symbol: 'ETHUSDT',
    custom: false,
    Price: '--',
  })

  const reducer2 = (state, action) => {
    switch (action.type) {
      case 'update':
        return action.payload
      default:
        throw new Error()
    }
  }

  const [state2, dispatcher2] = useReducer(reducer, { color: '#171B26' })

  return (
    <>
      <Context2.Provider
        value={{
          color: state2.color,
          dispatcher: dispatcher2,
        }}
      >
        <div style={{ backgroundColor: state2.color }}>
          <UserHeader />

          <Box
            sx={{ height: '7vh', width: '100%', backgroundColor: '#171B26' }}
          ></Box>
          {/* <hr style={{borderTop:'7px solid #323849'}}/> */}

          <Context.Provider
            value={{
              symbol: state.symbol,
              custom: state.custom,
              Cprice: state.Cprice,
              price: state.price,
              dispatcher: dispatcher,
            }}
          >
            <div
              className="coinwrap"
              // style={{ overflow: 'scroll' }}
            >
              <CoinData
                bgcolor={state2.color}
                coins={coins}
                coinChange={handleCoinChange}
              />
              {/* <Container style={{width:'300px'}}></Container> */}

              <Box
                id="middlebox"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  backgroundColor: state2.color,
                  padding: '10px',
                  width: '60%',
                }}
              >
                <Data24hr
                  color={state2.color}
                  coins={coins}
                  coinChange={handleCoinChange}
                ></Data24hr>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {state.custom ? (
                    <CustomChart size={size} />
                  ) : (
                    <AdvancedRealTimeChart
                      style={{ zIndex: -2 }}
                      height={350}
                      width={size - 40}
                      symbol={state.symbol}
                      theme={state2.color == '#ffffff' ? 'light' : 'dark'}
                      container_id="chart"
                      hide_top_toolbar="true"
                      left_toolbar="true"
                    ></AdvancedRealTimeChart>
                  )}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '30px',
                    backgroundColor:(state2.color == '#ffffff'?'#f5f5f5':'#171b26')
                  }}
                >
                  <BuyCoin
                    bgcolor={state2.color}
                    coins={coins}
                    coinChange={handleCoinChange}
                  />
                  <SellCoin
                    bgcolor={state2.color}
                    coins={coins}
                    coinChange={handleCoinChange}
                  />
                </Box>
              </Box>

              {/* Mob new ================================ */}
              {/* Mob new ================================ */}
              {/* Mob new ================================ */}

              {state.boolVal ? (
                <Box sx={{ overflow: '' }}>
                  <Box
                    id="middlebox"
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                      backgroundColor:
                        state2.color == '#ffffff' ? '#ebedef' : '#171B26',
                      padding: '10px',
                    }}
                  >
                    <Data24hr
                      color={state2.color}
                      coins={coins}
                      coinChange={handleCoinChange}
                    ></Data24hr>

                    <Box
                      sx={{
                        display: { xs: 'block', sm: 'none' },
                        width: window.innerWidth - 20,
                        overflow: 'hidden',
                      }}
                    >
                      {' '}
                      {state.custom ? (
                        <CustomChart />
                      ) : (
                        <AdvancedRealTimeChart
                          height={window.innerHeight - 80}
                          width={window.innerWidth - 20}
                          symbol={state.symbol}
                          theme={state2.color == '#ffffff' ? 'light' : 'dark'}
                          container_id="chart2"
                          hide_side_toolbar="false"
                        ></AdvancedRealTimeChart>
                      )}
                    </Box>

                    <Box
                      sx={{
                        overflowX: 'hidden',
                        backgroundColor:
                          state2.color == '#ffffff' ? '#ffffff' : '#171b26',
                        top: '0vh',
                        overflow: 'scroll',
                        paddingBottom: '40px',
                        paddingTop: '40px',
                        zIndex: '8',
                        overflow: 'hidden',
                        width: '100%',
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: 'flex',
                            height: '3vh',
                            backgroundColor:
                              state2.color == '#ffffff' ? 'grey' : '#1C2230',
                            alignItems: 'center',
                            width: window.innerWidth - 30,
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: changeColor ? '#2E7D32' : '',
                              color: 'white',
                              height: '4vh',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: window.innerWidth * 0.5,
                            }}
                          >
                            <NavLink
                              onClick={changecolor1}
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                                paddingLeft: '60px',
                                paddingRight: '60px',
                              }}
                              to="/trade/buysell/buycoin"
                            >
                              Buy
                            </NavLink>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: changeColor ? '' : '#D32F2F',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              color: 'white',
                              height: '4vh',
                              width: window.innerWidth * 0.5,
                            }}
                          >
                            <NavLink
                              onClick={changecolor2}
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                                paddingLeft: '60px',
                                paddingRight: '60px',
                              }}
                              to="/trade/buysell/sellcoin"
                            >
                              Sell
                            </NavLink>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Outlet
                            coins={coins}
                            coinChange={handleCoinChange}
                          ></Outlet>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* {buyactive || sellactive ?<></>:
                            <Box sx={{ display:{xs:'block', sm:'none'},position: 'fixed', bottom: '70px', backgroundColor: '', height: '3vh', width: window.innerWidth }}>
                            
                            <Box sx={{ display: 'flex', height: '5vh', backgroundColor: '', alignItems: 'center', width:window.innerWidth}}>
                    
                    <Box onClick={BuyToggleBtn} sx={{ backgroundColor: '#2E7D32', cursor:'pointer',color: 'white', height: '5vh', display:'flex',justifyContent:'center',alignItems:'center',width:window.innerWidth* 0.5}}>
                    
                    <Box   style={{textDecoration:'none', color:'white'}} >Buy</Box>
                    </Box>
                    <Box  onClick={SellToggleBtn} sx={{backgroundColor:'#D32F2F',cursor:'pointer', display:'flex',justifyContent:'center',alignItems:'center', color:'white',height:'5vh', width:window.innerWidth* 0.5}}>
                        
                    <Box  style={{textDecoration:'none', color:'white'}}>Sell</Box>
                    </Box>
                    
                    </Box>
                            
                            </Box>
                            } */}
                </Box>
              ) : (
                <></>
              )}

              {/* Mob new ================================ */}
              {/* Mob new ================================ */}

              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  width: '500px',
                  backgroundColor: state2.color,
                  borderLeft:
                    state2.color == '#ffffff'
                      ? '1px solid #E7E7E8'
                      : '1px solid #363c4e',
                  borderBottom:
                    state2.color == '#ffffff'
                      ? '1px solid #E7E7E8'
                      : '1px solid #363c4e',
                  width: '20%',
                }}
              >
                <Box
                  sx={{
                    overflow: 'scroll',
                    overflowX: 'hidden',
                    height: '50vh',
                  }}
                >
                  <Box
                    sx={{ fontSize: '16px', color: 'grey', padding: '20px' }}
                  >
                    <BuyOrder bgcolor={state2.color}></BuyOrder>
                  </Box>
                </Box>

                <Box
                  sx={{
                    fontSize: '16px',
                    color: 'grey',
                    padding: '20px',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                    height: '50vh',
                  }}
                >
                  <SellOrder bgcolor={state2.color}></SellOrder>
                </Box>
              </Box>
            </div>

            <div style={{ height: '7vh' }}></div>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                height: '100vh',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  backgroundColor:
                    state2.color == '#ffffff' ? '#f1f1f1' : 'rgb(27 32 46)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    color: 'grey',
                    backgroundColor:
                      state2.color == '#ffffff' ? '' : '',
                    height: '7vh',
                    width: '50%',
                  }}
                >
                  {/* <div onClick={openOrder} style={{ cursor: 'pointer' }}>Open Order</div>
                            <div onClick={orderhistory} style={{cursor:'pointer'}}>Order History</div>
                            <div onClick={Tradehistory} style={{cursor:'pointer'}}>Trading History</div>
                            <div onClick={Fund} style={{cursor:'pointer'}}>Fund</div> */}

                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: 'grey',

                    }}
                    to="/trade/openorder"
                  >
                    Open Order
                  </Link>
                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: 'grey',
                    }}
                    to="/trade/orderhistroy"
                  >
                    Order History
                  </Link>
                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: 'grey',
                    }}
                    to="/trade/tradehistory"
                  >
                    Trade{' '}
                  </Link>
                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: 'grey',
                    }}
                    to="/trade/showwallet"
                  >
                    Fund
                  </Link>
                </div>

                <div style={{ backgroundColor: '#171B26', color: 'grey' }}>
                  {/* {tradedata? <div style={{padding:'40px'}}><TradeHistory></TradeHistory></div> :<></>}
                        {Fundx ? <div style={{padding:'40px'}}> <Showwallet></Showwallet></div> : <></>}
                          {openOrderx?  <OpenOrder />:<></>}
                          {orderhistoryx?   <OrderHistory />:<></>} */}
                  <Outlet />
                </div>
              </div>
            </Box>
          </Context.Provider>
        </div>
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
                state2.color == '#ffffff' ? '#f9f9f9' : '#171B26',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: 'rgb(105 50 151) 2px 1px 2px 0px',
              padding: '10px',
              borderTop:
                state2.color == '#ffffff'
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
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <DashboardIcon sx={{ color: '#7D8794', fontSize: '18px' }} />
              </IconButton>
            </Link>
          </Box>

          <Box>
            <Link to="/userpanel/userkyc" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <Person4Icon sx={{ color: '#7D8794', fontSize: '18px' }} />
              </IconButton>
            </Link>
          </Box>
          <Box>
            <Link to="/trade" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <TradeNow sx={{ color: '#7D8794', fontSize: '18px' }} />
              </IconButton>
            </Link>
          </Box>

          <Box>
            <Link to="/userpanel/wallet" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
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
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <ArticleIcon sx={{ color: '#7D8794', fontSize: '18px' }} />
              </IconButton>
            </Link>
          </Box>
        </Box>

        <StableConnection />

        {/* <Loading/> */}
      </Context2.Provider>
    </>
  )
}

export default Trade
