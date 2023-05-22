import React from 'react'
import CoinList from './CoinList'
import './Css/CoinListBox.css'
import { Button, SearchBar, Box } from '@mui/material'
import Loading from '../../Loading'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Star from '@mui/icons-material/StarBorderOutlined'
import Star2 from '@mui/icons-material/Star'
import SearchIcon from '@mui/icons-material/Search'
import Context from '../../../hooks/useTheme2'

function CoinListBox({ coins, disbableBtn }, props) {
  const context = useContext(Context)
  const [coin, setcoin] = useState([])
  const [Loader, setLoader] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(coin)

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    setSearchResults(coin)
  }, [])

  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults(coin)
    }
  }, [searchQuery])

  useEffect(() => {
    setTimeout(() => {
      setLoader(1)
    }, 2000)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://139.84.137.232/api/searchquery/${'U'}`
      )
      const data = await response.json()
      setSearchResults(data)
      // console.log("THis is Searched Data " + data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://139.84.137.232/api/searchquery/${searchQuery}`
      )
      const data = await response.json()
      setSearchResults(data)
      // console.log("THis is Searched Data " + data)
    }

    fetchData()
  }, [searchQuery])

  const [Fav, setFav] = useState(0)
  const addFav = () => {
    if (Fav) {
      setFav(0)
    } else {
      setFav(1)
    }
  }

  useEffect(() => {}, [searchResults])

  const getdata = () => {
    axios.get('/getcoin')
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        setcoin(data)
      })
    // fetch('/getcoin').then(res=> res).then((data)=>{
    //   console.log(data)
    //   setcoin(data);
    // })
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <>
      <Box
        sx={{
          width: { xs: '100%', sm: '20%' },
          backgroundColor: context?.color == '#ffffff' ? '#f5f5f5' : '#171b26',

          borderBottom:
            context?.color == '#ffffff'
              ? '1px solid #E7E7E8'
              : '1px solid #363c4e',
          borderRight:
            context?.color == '#ffffff'
              ? '1px solid #E7E7E8'
              : '1px solid #363c4e',
          overflow: 'scroll',
          overflowX: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '4vh',
            backgroundColor: '#363BE6',
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
            color: 'white',
            padding: '20px',
          }}
        >
          Find Coin from here
        </Box>

        <Box>
          {' '}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Explore New Coins..."
              style={{
                height: '15px',
                backgroundColor: 'transparent',
                border:
                  context?.color == '#ffffff'
                    ? '1px solid #E7E7E8'
                    : '1px solid grey',
                padding: '15px',
                margin: '10px',
                width: '90%',
              }}
            />{' '}
            <SearchIcon sx={{ color: '#3468D1' }} />
          </div>
        </Box>

        {Loader ? (
          <Box sx={{ backgroundColor: props.bg }}>
            {searchResults.map((element) => {
              let price = ''
              let color = 'n'
              // console.log(coins)
              if (coins != null && coins.length > 0) {
                // console.log(element.symbol)

                let t = coins.find((el) => el.s == element.symbol)
                // console.log(t)
                if (t != null) {
                  price = Number(t['p']).toFixed(3)
                  color = t['color']
                }
              }

              return (
                <>
                  {/* <div style={{ width: '20%' }} id="coinimg">{Fav ? <Star2 onClick={addFav} sx={{ color: 'rgb(125 135 148 / 28%)', fontSize: '20px' }} /> : <Star onClick={addFav} sx={{ color: 'rgb(125 135 148 / 28%)', fontSize: '20px' }} />}</div> */}
                  <CoinList
                    bg={context?.color}
                    DisbableBtn={props.DisbableBtn}
                    disbableBtn={disbableBtn}
                    key={element.coinid}
                    symbol={element.symbol}
                    coinimg={element.coinimg}
                    price={price}
                    color={color}
                    quantity={element.quantity}
                    Cprice={element.price}
                    custom={element.custom}
                  />{' '}
                </>
              )
            })}{' '}
          </Box>
        ) : (
          <Loading />
        )}
        <div style={{ borderRight: '', height: '38px' }}></div>
      </Box>
    </>
  )
}

export default CoinListBox
