import React from 'react';
import CoinList from './CoinList'
import './Css/CoinListBox.css'
import { Button ,SearchBar, Box} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
function CoinListBox({coins}) {
  const [coin,setcoin]=useState([])
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/items?search=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    };
    fetchData();
  }, [searchQuery]);
  


  const getdata = ()=>{
  
  
  axios("http://139.84.137.232/api/getcoin").then(res=>res.data).then((data)=>{

    // console.log(data)
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
  <div className="coinlistbox">
  {/* <Box>
            
              <SearchIcon />
            </Box> */}

            <Box> <div style={{display:'flex', alignItems:'center',gap:'10px' , justifyContent:'center'}}><input type="text" onChange={handleInputChange} placeholder='Explore New Coins...'  style={{height:"15px", backgroundColor:'transparent' , border:'1px solid grey', padding:'15px' , margin:'10px'}}   /> <SearchIcon sx={{color:'#3468D1'}} /></div></Box>
           
         
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

     return <CoinList key={element.coinid} symbol={element.symbol} coinimg={element.coinimg} price={price} color={color} quantity={element.quantity} Cprice={element.price} custom={element.custom}  /> 
     
     })}
      <div style={{borderRight:'1px solid #363c4e', height:'38px'}}>
      


      </div>
  </div>
 
 

  </> 
    
  
    )
}

export default CoinListBox