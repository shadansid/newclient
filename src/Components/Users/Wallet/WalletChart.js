import React, {useState, useEffect } from 'react'
import {Chart as ChartJS, ArcElement,Legend, Tooltip} from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2';
import { Box } from '@mui/system';
import axios from 'axios'
import WWWs from '@mui/icons-material/Equalizer';
const WalletChart = () => {

    const [walletdata, setWalletdata] = useState(0)
   
  
  
  
  useEffect(() => {

        const config = {
          headers:{
            "accessToken":sessionStorage.getItem('accessToken')
          }
        }
       
        const url = "http://139.84.137.232/api/showwallet";
      
      
        axios.get(url, config)
        .then(res=>{ 
       setWalletdata(res.data)
     
        })
},[])

 


    // Chart
const data = {
    labels: ['USDT', 'ETH', 'XRP' ],
    datasets: [
      {
        data: [300, 50, 100, 70],
         
            backgroundColor: ['#990033', '#FF9000', '#5442F2', '#19B6A4'],
            // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#990033', '#FF9000', '#5442F2', '#19B6A4'],
            borderWidth: 0
      }
    ]
  };
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
   
    plugins:{
     
      legend: {
        position: 'right'
      }
    
    }
  };
  
    return (
  
  
  
      <Box sx={{ backgroundColor: '', width: { sm: '350px', xs: '300px' }, height: { sm: '350px', xs: '300px' }, padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        
        <Doughnut data={data} options={options} />
      
        <Box sx={{ color: 'grey', display: 'flex', justifyContent: 'center', alignItems:'center',}}><WWWs sx={{fontSize:'22px', color:'grey'}}/>   &nbsp;Wallet Overview </Box>
      
      </Box>
  )
}

export default WalletChart