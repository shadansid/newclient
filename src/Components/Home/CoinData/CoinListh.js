import React, { useEffect, useState } from 'react'
import DownGraph from '@mui/icons-material/TrendingDownOutlined';
import UpGraph from '@mui/icons-material/TrendingUpOutlined';
import Graph from '@mui/icons-material/StackedLineChartOutlined';
import { Box } from '@mui/system';
import {Container,Grid,Button} from '@mui/material'

function CoinListh(props) {

  
  
  


const showcoin = ()=>{

  console.log(props.symbol);


}


  return (
    <>
    
   <div className="coinlist" style={{color:'#47484D' , border:'none'}} onClick={showcoin}>

    <div  style={{display:'flex', alignItems:'center', width:'20%', fontSize:'13px'}} id="coinimg"><img src={props.coinimg} alt="" height="26px" width="26px" />&nbsp;&nbsp;{props.symbol}</div>
    <Box   sx={{display:{xs:'none',sm:'flex'}, fontSize:'13px',alignItems:'center',width:'20%'}} id="symbol">{props.symbol}</Box>
    
        <div id="price" style={{ width: '20%', fontSize: '13px', color: ((props.color == "g") ? "#089981" : (props.color == "r") ? "#F23645" : "") }}>${props.price}</div>
       
        <div id="price" style={{ width: '20%', fontSize: '13px', color: ((props.color == "g") ? "#089981" : (props.color == "r") ? "#F23645" : "") }}>
        <Graph/>
        </div>


        <div style={{ display: 'flex', alignItems: 'center', width: '' }}><Button sx={{ backgroundColor: '#5661FF' }} variant="contained">Trade</Button></div>
   </div>


   
    </>
  )       
}

export default CoinListh