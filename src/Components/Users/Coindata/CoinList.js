import React, { useContext, useEffect, useState } from 'react'
import './Css/CoinList.css'
import { Container, Grid, Box, Button, IconButton } from '@mui/material'
import Context from '../../../hooks/useCoin'
import Star from '@mui/icons-material/StarBorderOutlined'
import Star2 from '@mui/icons-material/Star'
import { Link } from 'react-router-dom'
import Context2 from '../../../hooks/useTheme2'

function CoinList(props) {
  // // --------------------------------------------------
  const context2 = useContext(Context2)
  // --------------------------------------------------

  const context = useContext(Context)
  const [isDataThere, setIsDataThere] = useState(false)

  useEffect(() => {
    if (props.price && !isDataThere) setIsDataThere(true)
  }, [props])

  useEffect(() => {
    if (props.symbol === 'ETHUSDT') {
      showcoin()
    }
  }, [isDataThere])

  const showcoin = () => {
    // console.log(props.symbol);
    // context.dispatcher({type:"update",payload:props.symbol })
    context.dispatcher({
      type: 'update',
      payload: {
        symbol: props.symbol,
        custom: props.custom,
        Cprice: props.Cprice,  
        price: props.price,
        DisbableBtn: props.DisbableBtn,
        boolVal: boolVal,
      },
    })
    // console.log("jdhuuibuibui")
    // setsymboldata(props.symbol)
    console.log('this is state c ' + props.price + '' + props.symbol)
  }

  const [boolVal, setboolVal] = useState(0)
  const sendValDs = () => {
    setboolVal(1)
  }

  const [Fav, setFav] = useState(0)
  const addFav = () => {
    if (Fav) {
      setFav(0)
    } else {
      setFav(1)
    }
  }

  return (
    <>
      {
        <Box
          className="coinlis"
          style={{
            borderTop:
              props.bg == '#ffffff' ? '1px solid #E7E7E8' : '1px solid #363c4e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          id={props.symbol}
        >
          <div
            style={{ width: '10%', cursor: 'pointer', paddingLeft: '10px' }}
            id="coinimg"
          >
            {Fav ? (
              <Star2
                onClick={addFav}
                sx={{ color: 'rgb(125 135 148 / 28%)', fontSize: '20px' }}
              />
            ) : (
              <Star
                onClick={addFav}
                sx={{ color: 'rgb(125 135 148 / 28%)', fontSize: '20px' }}
              />
            )}
          </div>

          <div
            style={{
              display: 'flex',
              color: 'grey',
              width: '90%',

              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '13px',

              cursor: 'pointer',
            }}
            onClick={showcoin}
          >
            <div style={{ width: '20%' }} id="coinimg">
              <img src={props.coinimg} alt="" height="20px" width="20px" />
            </div>
            <div style={{ width: '40%' }} id="symbol">
              {props.symbol}
            </div>

            <div
              id="price"
              style={{
                width: '40%',
                color:
                  props.color == 'g'
                    ? '#089981'
                    : props.color == 'r'
                    ? '#F23645'
                    : '',
              }}
            >
              ${props.Cprice === null ? props.price : props.Cprice}
            </div>
          </div>

          <Box
            sx={{ display: { xs: 'block', sm: 'none' }, width: '40%' }}
            id="symbol"
          >
            <Link style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: 'grey', fontSize: '0.8rem', padding: '6px' }}
              >
                {' '}
                <Button
                  onClick={() => {
                    sendValDs()

                    showcoin()

                    // props.disbableBtn();
                  }}
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: '#363BE6', fontSize: '11px' }}
                >
                  Trade
                </Button>
              </IconButton>
            </Link>
          </Box>
        </Box>
      }
    </>
  )
}

export default CoinList
// export {CoinList, symbolContext}
