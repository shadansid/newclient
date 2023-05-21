import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import { Typography, Button, Box, Container } from '@mui/material'
import Loading from '../../Loading'
const Showwallet = () => {
  const [walletdata, setwalletdata] = useState(0)
  const [total, settotal] = useState(0)

  useEffect(() => {
    const config = {
      headers: {
        accessToken: sessionStorage.getItem('accessToken'),
      },
    }

    const url = '/showwallet'

    axios.get(url, config).then((res) => {
      setwalletdata(res.data)
      let totalbal = 0
      res.data.forEach((item) => {
        totalbal += item.quantity
      })
      settotal(totalbal)
    })
  }, [])
           
  const [EachCoinPrice, setEachCoinPrice] = useState(0)
  let currency = []

  useEffect(() => {


    if (Array.isArray(walletdata.msg)) {
      for (let x of walletdata.msg) {
        console.log(x.currency)
        currency.push(x.currency)
      }
      let StrCurrency = currency.toString()
      console.log(
        'this is string test ' +
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${StrCurrency.toUpperCase()}&tsyms=USD
`
      )

      async function fetchData() {


        const response = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${StrCurrency.toUpperCase()}&tsyms=USD
        `);

        console.log(response.data)
        setEachCoinPrice(response.data)


      }

      fetchData();



      // console.log('this is each coin price' + EachCoinPrice.BTC.USD)







    }

  }, [walletdata])








  useEffect(() => {
    if (EachCoinPrice && Array.isArray(walletdata.msg)) {



      for (let e of walletdata.msg) {

        let symbol = e.currency.toUpperCase();

        console.log(` ${symbol} ye jo haina ye wo hai complete ${e.currency}  ${e.quantity} space h Each coin :   ${(EachCoinPrice[e.currency.toUpperCase()] === undefined ? EachCoinPrice[symbol] : EachCoinPrice[symbol].USD)} `)
      }


    }
  }, [EachCoinPrice])






  return (
    <>

      <Box>    <div
        style={{
          padding: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px',
        }}
      >
        <Box
          sx={{
            '&:active': { color: 'red' },
            '&:hover': { color: 'green' },
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              fontSize: '12px',
              color: 'grey',
            }}
            to="/userpanel/wallet"
          >
            Wallet Balance
          </Link>
        </Box>
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '12px',
            color: 'grey',
          }}
          to="/userpanel/wallet/addmoney"
        >
          Add Money
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '12px',
            color: 'grey',
          }}
          to="/userpanel/wallet/withdraw"
        >
          Withdraw
        </Link>
      </div>

        <Container>
          {' '}
          <Outlet />
        </Container></Box>

      { Array.isArray(walletdata.msg) ? (
        <Box>


          {/* ============================================================================== */}
          {/* <div style={{padding:'20px'}}><Typography sx={{fontSize:'20px',    display: 'flex',
           alignItems: 'center',
           height: '4vh' , color:'grey'}}>Wallet Balance</Typography></div> */}
          <Box sx={{ height: '2vh' }}></Box>
          <Box
            sx={{
              fontSize: { sm: '25px', xs: '16px' },
              background: '#1B202E',
              padding: { sm: '25px', xs: '10px' },
              color: 'grey',
            }}
          >
            {total && 'Total Amount ≈' + '$' + '------'}
          </Box>

          {walletdata &&
            walletdata.msg.map((ele) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '20px',
                  }}
                >
                  {/* {ele.type== 'credit'? :} */}
                  <div style={{ width: '20%' }}>
                    <img
                      src={`/static/images/coinimage/${ele.currency.toUpperCase()}.png`}
                      alt=""
                      height="30px"
                      width="30px"
                    />
                  </div>
                  <Box
                    sx={{
                      color: '#7D8794',
                      fontSize: { sm: '13px', xs: '10px' },
                      width: '30%',
                    }}
                  >
                    {ele.currency.toUpperCase()}
                  </Box>
                  <Box
                    sx={{
                      color: '#7D8794',
                      fontSize: { sm: '13px', xs: '10px' },
                      width: '30%',
                    }}
                  >
                    {ele.quantity}&nbsp;{ele.currency.toUpperCase()}
                  </Box>
   
                  <Box
                    sx={{
                      color: '#7D8794',
                      fontSize: { sm: '13px', xs: '10px' },
                      width: '30%',
                    }}
                  >
                    $ &nbsp; {ele.quantity * (EachCoinPrice[ele.currency.toUpperCase()] === undefined ? EachCoinPrice[ele.currency.toUpperCase()] : EachCoinPrice[ele.currency.toUpperCase()].USD)}
                  </Box>


                  <div style={{ width: '20%' }}>
                    <Button
                      sx={{ fontSize: { sm: '13px', xs: '10px' } }}
                      size="small"
                    >
                      Widthraw
                    </Button>
                  </div>

                  {/* <div><img src= alt="" /></div> */}
                </div>
              )
            })}
        </Box>
      ) : (
          walletdata.msg === 4 ?
        
          <Box sx={{ marginTop: '20px', backgroundColor:'transparent' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '20px',
              backgroundColor: '#1B202E',
              color: 'grey',
              position: 'scroll',
              top: '20px',
            }}
          >
            <div style={{ width: '' }}>Coin</div>
            <div style={{ width: '' }}>Price</div>
            <div style={{ width: '' }}>Amount</div>
            <div style={{ width: '' }}>Type</div>
            <div style={{ width: '' }}>Date</div>

          </div>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey', padding: '20px', backgroundColor: '#1a1f2a' }}> Nothing to show</Box>
         
              <Box sx={{ height: '100vh', backgroundColor: 'transparent' }}></Box>
        </Box>

        : <Loading />
      )}
    </>
  )
}

export default Showwallet
