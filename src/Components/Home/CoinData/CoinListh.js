import React, { useEffect, useState } from 'react'

import { Box } from '@mui/system';
import { Container, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom';

function CoinListh(props) {

  
  
  


const showcoin = ()=>{

  console.log(props.symbol);


}


  return (
    <>
    
   <div className="coinlist" style={{color:'#47484D' , border:'none'}} onClick={showcoin}>

    <Box  style={{display:'flex', alignItems:'center', width:'20%', fontSize:'13px'}} id="coinimg"><img src={props.coinimg} alt="" height="26px" width="26px" />&nbsp;&nbsp;{props.symbol}</Box>
    <Box   sx={{display:{xs:'none',sm:'flex'}, fontSize:{sm:'13px',xs:'11px'},alignItems:'center',width:{sm:'20%',xs:'40%'}}} id="symbol">{props.symbol}</Box>
    
        <div id="price" style={{ width: '20%', fontSize: {sm:'13px',xs:'11px'}, color: ((props.color == "g") ? "#089981" : (props.color == "r") ? "#F23645" : "") }}>${props.price}</div>
       
        <Box id="price" sx={{ display:{xs:'none',sm:'block'},width: '20%', fontSize: {sm:'13px',xs:'11px'}, color: ((props.color == "g") ? "#089981" : (props.color == "r") ? "#F23645" : "") }}>
        {props.color=='g'?<img src="http://localhost:8800/static/images/up.png" height='26px' alt="" />
        :<img src="http://localhost:8800/static/images/down.png" height='26px' alt="" />}
        </Box>


        <Box   sx={{ display: {sm:'flex',xs:'none'}, alignItems: 'center', width: '' }}><Button size='small' sx={{ backgroundColor: '#5661FF' }}   variant="contained">Trade</Button></Box>
   </div>


   
    </>
  )       
}

export default CoinListh