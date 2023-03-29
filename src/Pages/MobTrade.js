import React, { useReducer } from 'react'
import './css/MobTrade.css'
import CoinListBox from '../Components/Users/Coindata/CoinListBox'
import Chart from '../Components/Users/Coindata/Chart'
import BuyCoin from '../Components/Users/Coindata/BuyCoin'
import UserHeader from '../Components/Users/UserHeader'
import StableConnection from '../Components/Users/StableConnection'
import CoinData from '../Components/Users/Coindata/CoinData'
import TradeHistory from '../Components/Users/TradeHistory'
import BuyOrder from '../Components/Users/BuyOrder'
import SellOrder from '../Components/Users/SellOrder'
import { useEffect, useState } from 'react'
import './css/Trade.css'
import { Box,Container, IconButton} from '@mui/material';
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
import Loading from '../Components/Loading'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4Icon from '@mui/icons-material/Person4';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ArticleIcon from '@mui/icons-material/Article';
import SecurityIcon from '@mui/icons-material/Security';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SsidChartIcon from '@mui/icons-material/SsidChart';

import { Outlet , Link,NavLink} from 'react-router-dom'

const MobTrade = () => {
  const [size, setsize] = useState(0)
    useEffect(() => {
        let size = document.getElementById('middlebox').offsetWidth; 
        setsize(size)

},[])

    const [coins,setCoins] = useState([])

    const handleCoinChange = (coin) => {

        setCoins(coin)



    }
const [loader, setLoader] = useState(1)
    useEffect(() => {
        setLoader(0)     

},[])

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
setsellactive(1)    

    }
    
    const toggleClose = () => {
        setbuyactive(0)
        setsellactive(0)

    }










    
    // const [state,dispatcher] = useReducer(reducer,"ETHUSDT")
    const [state,dispatcher] = useReducer(reducer,{symbol:'ETHUSDT',custom:false, Price:"--"})
  
    
    return ( <>
    
        <Box sx={{width:window.innerWidth}}>

    <div style={{backgroundColor:'#171B26'}}>
    <UserHeader/>
    
    <Box sx={{height:'7vh' ,width:'100%', backgroundColor:'#171B26'}}></Box>
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


   
    <Box id='middlebox' sx={{ display: { xs: 'block', sm: 'none' }, backgroundColor:'#171B26' , padding:'10px'}}>
    <Data24hr coins={coins} coinChange={handleCoinChange}></Data24hr>

       { state.custom?<CustomChart/>:<AdvancedRealTimeChart style={{ zIndex: -2 }} height={window.innerHeight} width={window.innerWidth - 20} symbol={state.symbol} theme='dark'  container_id='chart' ></AdvancedRealTimeChart>}
    
                        
{buyactive?
                            <Box sx={{ backgroundColor: '#171b26', position: 'fixed', top: '0vh', overflow: 'scroll', padding: '20px', height: window.innerHeight ,zIndex:'8', width:window.innerWidth-20, overflow:'hidden'}}>
                               <Box sx={{display:'flex', justifyContent:'flex-end'}}> <Box onClick={toggleClose} sx={{color:'grey', fontSize:'20px', cursor:'pointer', padding:'20px'}}> X </Box></Box>
                                
                                <Box>
                            <Box sx={{ display: 'flex', height: '3vh', backgroundColor: '#1C2230', alignItems: 'center', width:window.innerWidth-30}}>

                                <Box sx={{ backgroundColor: (changeColor?'#2E7D32':''), color: 'white', height: '3vh', display:'flex',justifyContent:'center',alignItems:'center',width:window.innerWidth* 0.5}}>
                                
                                <NavLink  onClick={changecolor1} style={{textDecoration:'none', color:'white', paddingLeft:'60px', paddingRight:'60px'}}  to='/mobtrade/buysell'>Buy</NavLink>
                                </Box>
                                <Box sx={{backgroundColor: (changeColor?'':'#D32F2F'), display:'flex',justifyContent:'center',alignItems:'center', color:'white',height:'3vh', width:window.innerWidth* 0.5}}>
                                    
                                <NavLink onClick={changecolor2} style={{textDecoration:'none', color:'white', paddingLeft:'60px', paddingRight:'60px'}}    to='/mobtrade/buysell/sellcoin'>Sell</NavLink>
                            </Box>
                            
                            </Box>
                       
                       
                            <Box sx={{ width: window.innerWidth-20, display: 'flex', justifyContent: 'center' }}> 
                            <Outlet coins={coins} coinChange={handleCoinChange}></Outlet>
                        </Box>
</Box></Box>:<></>}

    </Box>
   
                </div>
                
     
    
    </Context.Provider>
   
        </div>


{buyactive || sellactive ?<></>:
        <Box sx={{ position: 'fixed', bottom: '55px', backgroundColor: '', height: '3vh', width: window.innerWidth }}>
        
        <Box sx={{ display: 'flex', height: '3vh', backgroundColor: '', alignItems: 'center', width:window.innerWidth}}>

<Box onClick={BuyToggleBtn} sx={{ backgroundColor: '#2E7D32', cursor:'pointer',color: 'white', height: '3vh', display:'flex',justifyContent:'center',alignItems:'center',width:window.innerWidth* 0.5}}>

<Box   style={{textDecoration:'none', color:'white'}} >Buy</Box>
</Box>
<Box  onClick={SellToggleBtn} sx={{backgroundColor:'#D32F2F',cursor:'pointer', display:'flex',justifyContent:'center',alignItems:'center', color:'white',height:'3vh', width:window.innerWidth* 0.5}}>
    
<Box  style={{textDecoration:'none', color:'white'}}>Sell</Box>
</Box>

</Box>
        
        </Box>
        }







            












            








            









            



        {/* mobo=============================================================== */}
<Box sx={{display:{sm:'none', xs:'flex' , position:'fixed' , bottom:0, height:'55px' , width:window.innerWidth ,zIndex:12 , display:'flex' ,backgroundColor:'#171B26' ,flexDirection:'row',justifyContent:'space-between' , alignItems:'center' , boxShadow:'rgb(105 50 151) 2px 1px 2px 0px', padding:'10px', borderTop:'1px solid '}}}>
 
 <Box>
                {/* <DashboardIcon style={{ color: '#5442f2' }} /> */}
                <Link to='/userpanel/userdashboard' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}><DashboardIcon sx={{color:'#7D8794',fontSize:'18px'}} /></IconButton></Link>
  </Box>
   
<Box>

             
                <Link to='/userpanel/userkyc' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}><Person4Icon sx={{color:'#7D8794',fontSize:'18px'}} /></IconButton></Link>
</Box>
<Box>
    
                <Link to='/userpanel/wallet' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}><AccountBalanceWalletIcon sx={{color:'#7D8794',fontSize:'18px'}} /></IconButton></Link>
 </Box>
<Box>
               
                <Link to='/userpanel/tradehistory' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}><ArticleIcon sx={{color:'#7D8794',fontSize:'18px'}} /></IconButton></Link>
 </Box>


 
 </Box>


            
 </Box>            {/* <Loading/> */}
        </>
  
  
    )
}

export default MobTrade