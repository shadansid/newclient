import React, { useContext, useEffect, useState } from 'react'
import './Css/CoinList.css'
import {Container,Grid,Box} from '@mui/material'
import Context from '../../../hooks/useCoin'



function CoinList(props) {
  // const [symboldata , setsymboldata] = useState("");


const context = useContext(Context)



const showcoin = ()=>{

  // console.log(props.symbol);
  // context.dispatcher({type:"update",payload:props.symbol })
  context.dispatcher({type:"update",payload:{symbol :props.symbol, custom:props.custom, Cprice:props.Cprice,price:props.price} })
  // console.log("jdhuuibuibui")
  // setsymboldata(props.symbol)
  console.log("this is state c " + props.price +  "" + props.symbol)

}


  return (
    <>
   <Box  className="coinlist" onClick={showcoin}>

    <div style={{width:'20%'}} id="coinimg"><img src={props.coinimg} alt="" height="20px" width="20px" /></div>
    <div style={{width:'40%'}} id="symbol">{props.symbol}</div>
    <div id="price" style={{width:'40%',color:((props.color=="g")?"#089981":(props.color=="r")?"#F23645":"")}}>${props.Cprice===null?props.price:props.Cprice}</div>
   </Box>

    {/* <Container>

    <Grid spacing={0}>
    
    <Grid xs={4}>
    <img src={props.coinimg} alt="" height="20px" width="20px" />
    </Grid>

    <Grid xs={4}>
    {props.symbol}
    </Grid>

    <Grid xs={4}>
    ${props.price}
    </Grid>

    </Grid>

    </Container> */}


   
    </>
  )
}

export default CoinList
// export {CoinList, symbolContext}