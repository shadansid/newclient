import React, { useState , useEffect} from 'react'
import {Container, Box} from '@mui/material'
import User6 from '@mui/icons-material/AccountCircle';
import axios from 'axios'
import TradeIcon from '@mui/icons-material/AttachMoney';
import OrderBook from '@mui/icons-material/ContentPasteGo';
import WithdrawIcon from '@mui/icons-material/OpenInNew';
import Addmoney from '@mui/icons-material/AddCardOutlined';
import { Link } from 'react-router-dom';
const MobShortcuts = () => {
  return (
      <>
        <div style={{backgroundColor:'' , padding:'10px'}}>


<Box sx={{backgroundColor:'#1d2230' ,display:{sm:'none',xs:'flex'}, color:'white' ,width:'auto', height:'10vh' , alignItems:'center', justifyContent:'space-between', gap:{sm:'20px',xs:'10px'} , padding:'10px'}}>

                  

<Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', color:'grey',gap:'10px' }}>
                             
                      <Box sx={{ display: 'flex', justifyContent:'center'}}><Addmoney sx={{ color: 'grey', fontSize: '20px' }} /></Box>
                       <Link  to='/userdashboard/wallet' sx={{fontSize:'12px', textDecoration:'none', color:'grey'}}>Add Money</Link>

</Box>

                  
<Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', color:'grey',gap:'10px' }}>
                             
                      <Box sx={{ display: 'flex', justifyContent:'center'}}>     <WithdrawIcon sx={{ color: 'grey', fontSize: '20px' }} /></Box>
                       <Link to='/userdashboard/wallet'  sx={{fontSize:'12px', textDecoration:'none', color:'grey'}}>Withdraw</Link>

</Box>



                  
<Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' , color:'grey',gap:'10px'}}>
                             
                     <Box sx={{ display: 'flex', justifyContent:'center'}}> <TradeIcon sx={{ color: 'grey', fontSize: '20px' }} /></Box>
                      <Link  to='/trade'sx={{fontSize:'12px', textDecoration:'none', color:'grey'}}>Trade</Link>

</Box>





                  
<Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' , color:'grey',gap:'10px'}}>
                             
                     <Box sx={{ display: 'flex', justifyContent:'center'}}> <OrderBook sx={{ color: 'grey', fontSize: '20px' }} /></Box>
                      <Link sx={{fontSize:'12px', textDecoration:'none', color:'grey'}}>OrderBook</Link>

</Box>















</Box>



                        </div>
      
      
      </>
  )
}

export default MobShortcuts