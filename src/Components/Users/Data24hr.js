import React, { useEffect, useState, useContext } from 'react'
import { connection, w3cwebsocket as W3CWebSocket } from "websocket";
import {Box, Container} from '@mui/material'
import Context from '../../hooks/useCoin';

// const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');



const Data24hr = ({coins,coinChange}) => {
    const context = useContext(Context)
  
    const [client,setClient] = useState(new W3CWebSocket(`wss://stream.binance.com:9443/ws/${(context.symbol).toLowerCase()}@ticker`))
    
    const [coin,setcoin] = useState(0);
    
    // client.onmessage = (message) => {
    //     // console.log(message.s)
    //     // console.log(message.data) 
        
    //     let x = JSON.parse(message.data)
    //     setcoin(x)
    // }
    
    
    useEffect(()=>{
        if(client._bufferedAmount>0){

            const readText = client.readText()
            readText.read()


        }
        client.close()
        setClient(new W3CWebSocket(`wss://stream.binance.com:9443/ws/${(context.symbol).toLowerCase()}@ticker`));
        
        

        // console.log(context.symbol)


    },[context.symbol])
    
    useEffect(()=>{
       
        client.onmessage = (message) => {
            // console.log(message.s)
            // console.log(message.data) 
            console.log("Hii")
            let x = JSON.parse(message.data)
            setcoin(x)
        }
    },[client])



  return (
    
    
    <>
    <div style={{backgroundColor:'#171B26'}}>


    <Container sx={{backgroundColor:'#171B26' , color:'white' , height:'10vh' , display:'flex' , alignItems:'center', justifyContent:'center', gap:'20px'}}>

<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
    <div style={{color:'grey', fontSize:'11px'}}>Symbol</div>
        <Box sx={{fontSize:'16px'}}>
        {coin.s}
        </Box>
</Box>


<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
    <div style={{color:'grey', fontSize:'11px'}}>24h Change</div>
        <Box sx={{fontSize:'16px'}}>
        {coin.P}
        </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
    <div style={{color:'grey', fontSize:'11px'}}>24h high</div>
        <Box sx={{fontSize:'16px', color:'#089981'}}>
        {coin.h}
        </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
    <div style={{color:'grey', fontSize:'11px'}}>24h Low</div>
        <Box sx={{fontSize:'16px',color:'#F23645'}}>
        {coin.l}
        </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
    <div style={{color:'grey', fontSize:'11px'}}>24h Volume</div>
        <Box sx={{fontSize:'16px'}}>
        {coin.v}
        </Box>
</Box>





 

    </Container>
    
   
    
    </div>
    </>
  )
}

export default Data24hr