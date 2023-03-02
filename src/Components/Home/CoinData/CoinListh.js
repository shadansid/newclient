import React, { useEffect, useState } from 'react'

import {Container,Grid,Button} from '@mui/material'

function CoinListh(props) {

  
  
  


const showcoin = ()=>{

  console.log(props.symbol);


}


  return (
    <>
    
   <div className="coinlist" style={{color:'#47484D' , border:'none'}} onClick={showcoin}>

    <div  style={{display:'flex', alignItems:'center', width:'30%', fontSize:'13px'}} id="coinimg"><img src={props.coinimg} alt="" height="20px" width="20px" />&nbsp;&nbsp;{props.symbol}</div>
    <div   style={{display:'flex', fontSize:'13px',alignItems:'center',width:'20%'}} id="symbol">{props.symbol}</div>
    <div   id="price" style={{width:'20%',fontSize:'13px', color:((props.color=="g")?"#089981":(props.color=="r")?"#F23645":"")}}>${props.price}</div>
    <div style={{display:'flex', alignItems:'center',width:'20%'}}><Button sx={{backgroundColor:'orange'}} variant="contained">Trade</Button></div>
   </div>


   
    </>
  )       
}

export default CoinListh