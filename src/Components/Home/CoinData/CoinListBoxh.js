import React from 'react';
import CoinListh from './CoinListh'
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import axios from 'axios'

function CoinListBoxh({coins}) {
  const [coin,setcoin]=useState([])
  
  const getdata = ()=>{
  
  
  axios("http://139.84.137.232/api/getcoin").then(res=>res.data).then((data)=>{

    console.log(data)
    setcoin(data)

  })
  // fetch('/getcoin').then(res=> res).then((data)=>{
  //   console.log(data)
  //   setcoin(data);
  // })
  
  }
  
 
  
  useEffect(()=>{
    getdata();
  },[])
  
  return (
   
  <>
  <div  style={{backgroundColor:'transparent', width:'100%', color:'black', border:'1px solid #E8E9EC',borderRadius:'9px'}}>
  
  <div style={{height:'8vh',padding:'13px',borderBottom:'1px solid #E8E9EC',borderRadius:'9px', display:'flex',alignItems:'center'}}>
      <Box sx={{width:{sm:'20%',xs:'30%'},fontSize:'16px',color:'#657489'}}>Assests</Box>
      <Box sx={{display:{xs:'none',sm:'block'}, width:'20%',fontSize:'16px',color:'#657489'}}>Name</Box>
      <Box sx={{width:{sm:'20%',xs:'30%'},fontSize:'16px',color:'#657489'}}>Price</Box>
      <Box sx={{display:{xs:'none',sm:'block'},width:'20%',fontSize:'16px',color:'#657489'}}>Graph</Box>
      <Box sx={{width:'',fontSize:'16px',color:"#657489"}}>Action</Box>
    </div>
    
  {coin.map((element)=>{

    let price = ""
    let color = "n"
    // console.log(coins)
    if(coins!=null&&coins.length>0){
      // console.log(element.symbol)
         
      let t = coins.find((el)=> el.s==element.symbol)
      // console.log(t)
      if(t!=null){
        price = Number(t["p"]).toFixed(3)
        color = t["color"] 
      }

    }

     return <CoinListh style={{}} key={element.coinid} symbol={element.symbol} coinimg={element.coinimg} price={price} color={color} /> 
     
     })}
  </div>
 

  </> 
    
  
    )
}

export default CoinListBoxh