import React, { useEffect, useState } from 'react'
import Login from '../Components/Users/Login'
import {Container, Typography, Toolbar,IconButton, Button,Box,Badge, Grid} from '@mui/material'
import {LineChart,Tooltip,CartesianGrid,Line,XAxis} from 'recharts'
import TransactionHistory from '../Components/Users/TransactionHistory'
import TradeHistory from '../Components/Users/TradeHistory'
import Wallet from '../Components/Users/Wallet/Wallet'
import WalletBalane from '../Components/Users/Wallet/WalletBalane'

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
import TradeHistoryDashboard from '../Components/Users/TradeHistoryDashboard'

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

        axios.get('/checklogin')
        .then(function (response) {
           
            setLogin(response.data.status);
            
            // if(isLoggedIn != 200 ){
            //     navilogout('/');
            // }
            

        })

        


    },[isLoggedIn]);


    return (
   
         <>
        
         
          {isLoggedIn && <div>

         

       
        <Container style={{padding:'30px',backgroundColor:"#171B26"}}>
     
         <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     
        
        
        
         {/* <Grid item  xs={6} md={12} > */}
   
           
           {/* </Grid> */}
     
           
           
           {/* <Grid item  xs={6} >
           <Container  onClick={Wallet} style={{background:'#1B192F', height:'150px', borderRadius:'23px',cursor:'pointer' }}> */}
               
           <WalletBalane />
           <Container sx={{height:'8vh',color:'#EAECEF' , fontSize:'28px', display:'flex',alignItems:'center'}}>Recommended For You
</Container>
             <Container onClick={Airdrop}>

                    <img src="http://64.227.140.80/api/static/images/Airdrop/airdrop.jpg" alt="" height='300px' />   

        
     
                   </Container>
                   <Container sx={{height:'8vh',color:'#EAECEF' , fontSize:'28px', display:'flex',alignItems:'center'}}>Recent Transactions
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
     
     
     
     
     
         </Grid>
     
     
         
        </Container>
        
     



{/* botto,m */}
<Box sx={{display:{sm:'none', xs:'flex' , position:'fixed' , bottom:0, height:'55px' , width:window.innerWidth ,zIndex:5 , display:'flex' , flexDirection:'row',justifyContent:'space-between' , alignItems:'center' , boxShadow:'rgb(105 50 151) 2px 1px 2px 0px', padding:'10px'}}}>
 
 <Box>
  <DashboardIcon style={{color:'#5442f2'}} />
  </Box>
   
<Box>

<Person4Icon style={{color:'#EA661C'}} />
</Box>
<Box>
 <AccountBalanceWalletIcon style={{color:'#0082FC'}} />
 </Box>
<Box>
 <ArticleIcon style={{color:'#1392DE'}}/>
 </Box>


 
 </Box>
 </div> }
 
        </>
  
  
    )
}

export default Dashboard