import React from 'react'
import { useState, useEffect } from 'react';
import {Container, Box} from '@mui/material'
import { connection, w3cwebsocket as W3CWebSocket } from "websocket";

const TradeTicker = () => {
  let arr = [
    "ethusdt@miniTicker","bnbusdt@miniTicker","wavesusdt@miniTicker","bchabcusdt@miniTicker"
    
  ];

      //let ws = new WebSocket("wss://stream.binance.com:9443/ws/" + streams.join('/'));
      let ws = new WebSocket(`wss://stream.binance.com:9443/ws/miniTicker@${arr}`);

      ws.onmessage = function(evt) {
        let d  = JSON.parse(evt.data)
        console.log(d)


      }
    return (
    
        <div>

          



        </div>



  )
}

export default TradeTicker