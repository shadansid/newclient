import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Typography} from '@mui/material'

const TradeHistoryDashboard = () => {
    const [tradedata,settradedata]  = useState(0)

    useEffect(()=>{
      const url = "/showtrade";
      axios.get(url, config)
      .then(res=>{ console.log(res.data)
      settradedata(res.data)
      
      })
      .catch(err=> console.log(err))
  
    },[tradedata])
  
    const config = {
        // headers:{
        //   "accessToken":sessionStorage.getItem('accessToken')
        // }
      }
 
    return (
    
    <>
    
    
    
    
    
{tradedata && tradedata.map((ele)=>{

return <div style={{display:'flex', alignItems:'center',justifyContent:'space-around' , padding:'20px',backgroundColor:'#1B192F'}}>
{/* {ele.type== 'credit'? :} */}
<div style={{width:'32%'}}><img src={`http://64.227.140.80/api/static/images/coinimage/${ele.currency.toUpperCase()}.png`} alt=""  height="20px" width="20px"/></div>
<div style={{width:'32%',color:'#6F6A6D'}}>{ele.currency}</div>
<div style={{width:'32%',color:((ele.type ==='credit')?'green':'red')}}>{"$ "+ ele.quantity*ele.amount}</div>


{/* <div><img src= alt="" /></div> */}

</div>

})}
    
    </>



  )
}

export default TradeHistoryDashboard