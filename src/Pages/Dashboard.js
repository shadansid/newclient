import React, { useEffect, useState } from 'react'
import Login from '../Components/Users/Login'

import {Container, Typography, Toolbar,IconButton, Button,Box,Badge, Grid} from '@mui/material'
// import {LineChart,Tooltip,CartesianGrid,Line,XAxis} from 'recharts'
import TransactionHistory from '../Components/Users/TransactionHistory'
import TradeHistory from '../Components/Users/TradeHistory'
import Wallet from '../Components/Users/Wallet/Wallet'
import WalletBalane from '../Components/Users/Wallet/WalletBalane'
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
  
    


    return (
   
         <>


     
      
         
          {isLoggedIn && <div>

         

       
        <Box style={{backgroundColor:"#171B26"}}>
     
         <Box>
     
            {/* User Profile */}
              <UserProfile />
        
                        
                        {/* User Profile */}
               
              <WalletBalane />
               

              {/* <Box sx={{display:'flex', gap:'50px'}}><GraphWallet/>
              <GraphWallet2/></Box> */}
                        
                        {/* <div style={{ width: '20%', height: '20%' }}>  <Line data={data2} options={options2} /></div> */}
                        

                        <MobShortcuts/>
              {/* <OpenOrder /> */}
              


           <Container sx={{height:'8vh',color:'grey' , fontSize:{sm:'28px', xs:'22px'}, display:'flex',alignItems:'center'}}>Recommended For You
</Container>
             <Container onClick={Airdrop}>
               
                  
                      <Box sx={{backgroundImage:"url('http://139.84.137.232/api/static/images/Airdrop/Airdrop2.gif')", backgroundPosition:'center', backgroundSize:'cover', height:{sm:'300px', xs:'200px'}, width:{xs:window.innerWidth -50,sm:'100%'}}}> </Box>
                     
                     

                      {/* <OrderHistory/> */}
     
                        </Container>
                   
                   <Container sx={{height:'8vh',color:'grey' , fontSize:{sm:'28px', xs:'22px'}, display:'flex',alignItems:'center'}}>Recent Transactions
</Container>
    
           <Container>

                      <TradeHistoryDashboard/>
           </Container>
             {/* <Container onClick={Airdrop} style={{background:'url("http://64.227.140.80/api/static/images/Airdrop/airdrop.jpg")',backgroundSize:'cover',backgroundPosition:'center' , height:'300px', borderRadius:'23px' , cursor:'pointer'}}>
               
     
        
     
                </Container> */}
         
     
        
               {/* </Container> */}
           {/* </Grid> */}
     
           {/* <Grid item  xs={6} >
           <Container onClick={Trade} style={{background:'#1B192F', height:'150px', borderRadius:'23px',  overflow: 'scroll', overflowX:'hidden',cursor:'pointer',"-webkit-scrollbar": {
  display: "none"
}}}>
           <TradeHistoryDashboard/>
               </Container>
           </Grid> */}

           
      
{/*      
           <Grid item  xs={6} >
           <Container onClick={Transaction} style={{background:'white', height:'150px', borderRadius:'23px' ,cursor:'pointer'}}>
               <TransactionHistory></TransactionHistory>
               </Container>
           </Grid> */}
           {/* <Grid item  xs={6} >
           <Container style={{background:'white', height:'150px', borderRadius:'23px'}}>
               
               </Container>
           </Grid>
     
      */}
     
     
     
     
     
         </Box>
     
     
         
        </Box>
        
     



{/* botto,m */}

 </div> }

        </>
  
  
    )
}

export default Dashboard