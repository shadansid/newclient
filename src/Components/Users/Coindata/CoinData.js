import React, { useEffect, useState } from 'react'
import { connection, w3cwebsocket as W3CWebSocket } from "websocket";
// import Chart from './Components/CoinData/Chart';
import CoinListBox from './CoinListBox';

// /stream?streams=<streamName1>/<streamName2>/<streamName3>

// const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade/dogeusdt@trade/btcusdt@trade/lunausdt@trade/bnbusdt@trade/solusdt@trade/xrpusdt@trade/adausdt@trade/ltcusdt@trade/btcbusd@trade');
client.onopen = () => {
  // console.log('WebSocket Client Connected') ;
 };

function CoinData(props) {

// console.log("Coin Data render")

  const [coin,setcoin] = useState({});

  const [coins, setCoins] = useState([]);
  const [DisbableBtn, setdisbableBtn] = useState(0)
  const disbableBtn = () => {
    setdisbableBtn(1)


}

  
  useEffect(()=>{
    
    
    
      
      client.onmessage = (message) => {
        // console.log(message.s)
        let tempo = JSON.parse(message.data)
        
        
        // console.log(message.s)
        setcoin(tempo);
        if(!coins.some((el)=>{
          return el["s"]==tempo.s
        })){
          setCoins([...coins,{"s":tempo.s,"p":tempo.p,"color":"n"}])
        }else{
          let temp = coins
          temp.map((el)=>{
            if(el["s"]==tempo.s){
              if(tempo.p>el["p"])
                el["color"] = "g"
              if(tempo.p<el["p"])
                el["color"] = "r"
              el["p"] = tempo.p
            }
          })
          setCoins(temp)
        }
        
        }
        
        
      

    
   
  },[coin]
   
    
)
  
return (
   
    
      <>
      
     
      {DisbableBtn?<></>:<CoinListBox bg={props.bgcolor} disbableBtn={disbableBtn} DisbableBtn={DisbableBtn} coins={coins}  data={props.on} />}
      

        </>

  )
}
export default CoinData



