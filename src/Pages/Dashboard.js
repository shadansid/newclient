import React, { useEffect, useState, useReducer } from 'react'
import Login from '../Components/Users/Login'
import CoinDatah from '../Components/Home/CoinData/CoinDatah'
import FourBoxes from '../Components/Users/FourBoxes'
import SideChat from '../Components/Users/SideChat'
import {Container, Typography, Toolbar,IconButton, Button,Box,Badge, Grid} from '@mui/material'
// import {LineChart,Tooltip,CartesianGrid,Line,XAxis} from 'recharts'
import TransactionHistory from '../Components/Users/TransactionHistory'
import TradeHistory from '../Components/Users/TradeHistory'
import Wallet from '../Components/Users/Wallet/Wallet'
import WalletBalane from '../Components/Users/Wallet/WalletBalane'
import Showwallet from '../Components/Users/Wallet/Showwallet'
import UserProfile from '../Components/Users/UserKyc/UserProfile';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4Icon from '@mui/icons-material/Person4';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ArticleIcon from '@mui/icons-material/Article';
import SecurityIcon from '@mui/icons-material/Security';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import axios from 'axios';
import WalletChart from '../Components/Users/Wallet/WalletChart'
import {Chart as ChartJS, ArcElement,Legend, Tooltip} from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2';
import MobShortcuts from '../Components/Users/MobShortcuts'
import TradeHistoryDashboard from '../Components/Users/TradeHistoryDashboard'
import OpenOrder from '../Components/Users/OpenOrder'
import OrderHistory from '../Components/Users/OrderHistory'
import GraphWallet from '../Components/Users/Wallet/GraphWallet'
import GraphWallet2 from '../Components/Users/Wallet/GraphWallet2'
import Footer from '../Components/Home/Footer'
import WalletDashboard from '../Components/Users/Wallet/WalletDashboard'
import TwoBoxes from '../Components/Users/TwoBoxes'
import Context from '../hooks/useTheme2'


ChartJS.register(ArcElement, Tooltip, Legend)
const Dashboard = () => {
    const navilogin =  useNavigate() 
    const Airdrop = ()=>{

        
        navilogin('/airdropcontest')
          
        // console.log("clicked on airdeop")
}

const Wallet = ()=>{

        
    navilogin('/userpanel/wallet')
      
    // console.log("clicked on airdeop")

}

const Trade = ()=>{

         
    navilogin('/userpanel/tradehistory')
      
    // console.log("clicked on airdeop")

}
  
const Transaction = ()=>{

        
    navilogin('/userpanel/transactionhistory')
      
    // console.log("clicked on airdeop")

}
    const [isLoggedIn, setLogin] = useState(0);
    // const [Airdrop, setAirdrop] = useState();
    // const [Spinner, setSpinner] = useState();
    const navilogout =  useNavigate()  

    useEffect(()=>{

        axios.get('http://139.84.137.232/api/checklogin')
        .then(function (response) {
           
            setLogin(response.data.status);
            
            // if(isLoggedIn != 200 ){
            //     navilogout('/');
            // }
            

        })

        


    },[isLoggedIn]);


// Chart
const data = {
    labels: ['USDT', 'ETH', 'XRP' ],
    datasets: [
      {
        data: [300, 50, 100, 70, 60, 50, 50, 670],
         
            backgroundColor: ['#BE6E46', '#3F7CAC', '#912F56','#1DD3B0','#1F7A8C', '#CB9173', '#F18F01', '#ACF7C1'],
            // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#BE6E46', '#3F7CAC', '#912F56','#1DD3B0'],
            borderWidth: 0
      }
    ]
  };
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: 'bottom',
      labels: {
        fontColor: 'white',
        fontSize: 14
      }
    }
  };
  
    
    // Chart 2 Line
   
    const reducer = (state, action) => {

      switch(action.type){
  
          case "update":
              return action.payload
          default:
              throw new Error()
      }
  
  
  }
  
  const [state,dispatcher] = useReducer(reducer,{color:'#ffffff'})
    


    return (
   
         <>

<Context.Provider value={{
      color:state.color,
      dispatcher : dispatcher
  }}>
     
      
         
          {isLoggedIn && <div>

         

       
        <Box style={{backgroundColor:''}}>
     
            


         <Box>
     
            {/* User Profile */}
              <UserProfile bg={state.color} />

              <TwoBoxes bg={state.color}/>




              <Box onClick={Airdrop} sx={{display:{sm:'block', xs:'none'}, marginTop: {sm:'20px',xs:'0px'},marginBottom:{sm:'20px',xs:'0px'}, display:'flex', justifyContent:'center'}}>

<Box sx={{display:{sm:'block', xs:'none'},backgroundImage:"url('http://139.84.137.232/api/static/images/Airdrop/Airdrop2.gif')", backgroundPosition:'center', backgroundSize:'cover', height:{sm:'200px', xs:'200px'}, width:{xs:window.innerWidth -50,sm:'100%'}}}> </Box>  

</Box>
             
             
             
              <FourBoxes bg={state.color} />

            
            
            
              <Box sx={{ display: 'flex', justifyContent: '', gap: '20px', flexWrap:'wrap' , padding:{xs:'20px'}}}>

              <Box sx={{display:{sm:'none',xs:'block'}, padding:'15px', fontSize:'16px', color:'grey'}}> Spot Wallet</Box>
                <Box sx={{backgroundColor: "#1C2230", display: 'flex',alignItems:'', flexDirection:'column' , padding:'20px' , borderRadius:'9px',boxShadow:'1px -2px 14px -1px black',width:'100%', overflow:'scroll', height:'50vh'}}><WalletDashboard/></Box>
             
                <Box sx={{display:{sm:'none',xs:'block'}, padding:'15px', fontSize:'16px', color:'grey'}}> Trade History</Box>
                <Box sx={{ backgroundColor: "#1C2230", display: 'flex', alignItems: '', flexDirection: 'column', padding: '20px', borderRadius: '9px', boxShadow: '1px -2px 14px -1px black', width: '100%', overflow: 'scroll', height: '50vh' }}>
                  
                  
                  {/* <TradeHistoryDashboard /> */}
                  <CoinDatah/>
                </Box>
             
             
             
              </Box>
               

              <SideChat bg={state.color}/>

                   
   
              


           <Container sx={{height:'8vh',color:'grey' , fontSize:{sm:'28px', xs:'22px'}, display:'flex',alignItems:'center'}}>Recommended For You
</Container>
             <Container onClick={Airdrop}>
               
                  
                      <Box sx={{backgroundImage:"url('http://139.84.137.232/api/static/images/Airdrop/Airdrop3.gif')", backgroundPosition:'center', backgroundSize:'cover', height:{sm:'300px', xs:'200px'}, width:{xs:window.innerWidth -50,sm:'100%'}}}> </Box>
                     
                     

                      {/* <OrderHistory/> */}
     
                        </Container>
              <Box sx={{marginTop:'20px'}}>
              <Footer></Footer>
                      
                   </Box>
            
     
     
     
     
     
         </Box>
     
     
         
        </Box>
        
     



{/* botto,m */}

 </div> }
 </Context.Provider>
        </>
  
  
    )
}

export default Dashboard