import React, {useState} from 'react'
import {Typography,Button,TextField,Select,MenuItem} from '@mui/material'
import axios from 'axios';
const Withdraw = () => {
  
  const [coin,setcoin] = useState("");
  const handleChange = (event) => {
    setcoin(event.target.value);
  };

  
  const inwithdraw = ()=>{
let wamount = document.getElementById('wamount').value;
let wemail = document.getElementById('wemail').value;

let data = {

    wamount:wamount,
    wemail:wemail,
    wcoin:coin
}
axios.post('http://139.84.137.232/api/internalwithdraw',data).then((res)=>{
    // console.log(res.data.msg)
})



  

  }

  const exwithdraw = ()=>{
    let wamount = document.getElementById('amount').value;
    let wemail = document.getElementById('email').value;
    
    let data = {
    
        wamount:wamount,
        wemail:wemail,
        wcoin:coin
    }
    axios.post('/externalWithdraw',data).then((res)=>{
        // console.log(res.data.msg)
    })
    
    
    
    
    
      }

  
    return (
   
    <>
    <div style={{border:'1px solid #80808017'}}>
  
    <div style={{padding:"20px" , display:'flex' ,justifyContent:'space-between',alignItems:'center', backgroundColor:'none'}}>
{/* <h3>Internal Transfer</h3> */}
<Select style={{height:'27px' ,border:'1px solid grey', width:'18%', color:'grey',marginRight:'1px', color:'black', backgroundColor:'none'}} id="coin" value={coin} onChange={handleChange} >  
<MenuItem sx={{color:'grey'}} value="ETH"><img src="http://139.84.137.232/api/static/images/coinimage/ETH.png"  height='20px' width='20px' alt="" />&nbsp;ETH</MenuItem>  
<MenuItem   sx={{color:'grey'}} value="USDT"><img src="http://139.84.137.232/api/static/images/coinimage/USDT.png"  height='20px' width='20px' alt="" />&nbsp;USDT</MenuItem>  
<MenuItem  sx={{color:'grey'}} value="BTC"><img src="http://139.84.137.232/api/static/images/coinimage/BTC.png"  height='20px' width='20px' alt="" />&nbsp;BTC</MenuItem>  
<MenuItem   sx={{color:'grey'}} value="DOGE"><img src="http://139.84.137.232/api/static/images/coinimage/DOGE.png"  height='20px' width='20px' alt="" />&nbsp;DOGE</MenuItem>  
</Select> 

<input small type="number" min='1' id='wamount' placeholder='Amount' style={{background:'transparent',margin:'10px',height:'27px' ,input:{color:"grey"}, width:'74%',border:'1px solid grey', padding:'10px'}}/>

<input id='wemail' placeholder='Email Address'style={{background:'transparent',margin:'10px',height:'27px' ,input:{color:"grey"}, width:'74%',border:'1px solid grey', padding:'10px'}}/>

<Button size='small' sx={{ fontSize:{sm:'11px',xs:'11px'}}} variant="contained" onClick={inwithdraw}>Withdraw</Button>
</div>

</div>
    
    </>
  
  
  
    )
}

export default Withdraw