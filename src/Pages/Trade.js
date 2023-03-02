import React, { useReducer } from 'react'
import CoinListBox from '../Components/Users/Coindata/CoinListBox'
import Chart from '../Components/Users/Coindata/Chart'
import BuyCoin from '../Components/Users/Coindata/BuyCoin'
import UserHeader from '../Components/Users/UserHeader'
import CoinData from '../Components/Users/Coindata/CoinData'
import TradeHistory from '../Components/Users/TradeHistory'
import BuyOrder from '../Components/Users/BuyOrder'
import SellOrder from '../Components/Users/SellOrder'
import { useEffect, useState } from 'react'
import './css/Trade.css'
import { Box,Container} from '@mui/material';
import SingleCoin from '../Components/Users/Coindata/SingleCoin'
import useContext from 'react'
import TradeHistoryTrade from '../Components/Users/TradeHistoryTrade'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Addmoney from '../Components/Users/Wallet/Addmoney'
import Context from '../hooks/useCoin'
import Data24hr from '../Components/Users/Data24hr'
import Showwallet from '../Components/Users/Wallet/Showwallet'
import OpenOrder from '../Components/Users/OpenOrder'
import OrderHistory from '../Components/Users/OrderHistory'
import CustomChart from '../Components/Users/CustomChart'

const Trade = () => {
  
    const [coins,setCoins] = useState([])

    const handleCoinChange = (coin) => {

        setCoins(coin)



    }
    const [tradedata, settradedata] = useState(0)
    const Tradehistory = () =>{
        setFund(0)
        settradedata(1)
      


    }

    const [openOrderx, setopenOrder] = useState(0)
    const openOrder = () =>{

        settradedata(0)
        setFund(0)
        setorderhistory(0)
        setopenOrder(1)

    }

    const [orderhistoryx, setorderhistory] = useState(0)
    const orderhistory = () =>{

        settradedata(0)
        setFund(0)
        setopenOrder(0)
        setorderhistory(1)


    }

    const [Fundx, setFund] = useState(0)
    const Fund = () =>{
        settradedata(0)
            setFund(1)


    }


    const reducer = (state,action) => {

        switch(action.type){
    
            case "update":
                return action.payload
            default:
                throw new Error()
        }
    
    
    }
    
    // const [state,dispatcher] = useReducer(reducer,"ETHUSDT")
    const [state,dispatcher] = useReducer(reducer,{symbol:'ETHUSDT',custom:false, Price:"--"})
  
    
    return ( <>
    

    <div style={{backgroundColor:'#171B26'}}>
    <UserHeader/>
    
    <Container sx={{height:'8vh' , backgroundColor:'#171B26'}}></Container>
    {/* <hr style={{borderTop:'7px solid #323849'}}/> */}
    
    <Context.Provider value={{
        symbol:state.symbol,
        custom:state.custom,
        Cprice:state.Cprice,
        price:state.price,
        dispatcher : dispatcher
    }}>
                <div className="coinwrap"
                    // style={{ overflow: 'scroll' }}
                >

    {/* 1250 */}
    <CoinData coins={coins} coinChange={handleCoinChange} />
    {/* <Container style={{width:'300px'}}></Container> */}
    <Box sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor:'#171B26' , padding:'10px'}}>
    <Data24hr coins={coins} coinChange={handleCoinChange}></Data24hr>

       { state.custom?<CustomChart/>:<AdvancedRealTimeChart style={{ zIndex: -2 }} height={350} width={window.innerWidth - 600} symbol={state.symbol} theme='dark'  container_id='chart' ></AdvancedRealTimeChart>}
    
    <BuyCoin coins={coins} coinChange={handleCoinChange} />
    </Box>
    <Box sx={{width:'500px', backgroundColor:'#171B26' , borderLeft:'1px solid #363c4e',  borderBottom:'1px solid #363c4e'}}>

        <Box sx={{overflow:'scroll', height:'50vh'}}> 
                            <Box sx={{ fontSize: '16px', color: 'grey', padding: '20px' }}>
                            <BuyOrder></BuyOrder>

                               
        </Box>
      
        </Box>
        
        <Box sx={{fontSize:'16px', color:'grey',padding:'20px',overflow:'scroll', height:'50vh' }}>
        <SellOrder></SellOrder>
     
            {/* <p style={{fontSize:'13px',textAlign:'center', paddingTop:'30px'}}
            >No Data to show</p> */}

        </Box>

    </Box>
                </div>
                
                <div style={{height:'7vh'}}></div>
    <Box sx={{
                    height: '100vh', marginTop:'20px' }}>
                    <div style={{width:'100%',backgroundColor:'rgb(27 32 46)' }}>  
                    <div style={{ display: 'flex', gap: '20px', alignItems: "center" , justifyContent:'space-around', color:'grey' , backgroundColor:'rgb(27 32 46)' , height:'7vh' , width:'50%'}}>
                            <div onClick={openOrder} style={{cursor:'pointer'}}>Open Order</div>
                            <div onClick={orderhistory} style={{cursor:'pointer'}}>Order History</div>
                            <div onClick={Tradehistory} style={{cursor:'pointer'}}>Trading History</div>
                            <div onClick={Fund} style={{cursor:'pointer'}}>Fund</div>

                        </div>

                        <div style={{backgroundColor:'#171B26', color:'grey'}}>
                        {tradedata? <div style={{padding:'40px'}}><TradeHistory></TradeHistory></div> :<></>}
                        {Fundx ? <div style={{padding:'40px'}}> <Showwallet></Showwallet></div> : <></>}
                          {openOrderx?  <OpenOrder />:<></>}
                          {orderhistoryx?   <OrderHistory />:<></>}
                          
                          
                          
                        </div>
                    
                    </div>
            </Box>
    
    </Context.Provider>
   
        </div>

      


        </>
  
  
    )
}

export default Trade