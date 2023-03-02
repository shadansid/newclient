import React ,{useState}from 'react'
import {Container,Button,TextField,InputLabel,Select,MenuItem, Typography} from '@mui/material'
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
const Addmoney = () => {
    const [age, setAge] = React.useState('');
    const [pyurl,setpyurl]=useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

const addmn = ()=>{
let amountbox = document.getElementById('amountbox').value;


axios.post('/addmoney', {
    amount:amountbox,
    currency:age
  },{
    headers:{"Authorization":" Bearer Npk11wrM5snF7ScEidhYdyTxhVEzXu2xxsLqbhiV--C3itqF76Z3obt_tF"}
  }
  

  )
  .then(function (response) {
    
    // console.log(response);

    setpyurl(response.data.payment_url)

    window.open(response.data.payment_url,null,'popup')


  })
  .catch(function (error) {
    // console.log(error);
  });

    

}

  
    return (
    <>
    <Container sx={{padding:'20px',border:'1px solid grey' }}>
    {/* <div style={{position:'absolute' , top:'5', right:'5'}}><ClearIcon sx={{color:'black'}} /></div> */}
    <div style={{padding:'20px'}}><Typography sx={{fontSize:'25px',color:'#7D8794'}}>Add Money</Typography></div>

        <Container style={{padding:'30px', display:'flex',flexDirection:'column' }}>
        <div>
       
        <Select style={{height:'40px' , width:'18%', marginRight:'1px', color:'#7D8794', border:'1px solid grey',backgroundColor:'none'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          >
          <MenuItem sx={{display:'flex', alignItems:'center'}} value={"usdt"}> <img src="http://64.227.140.80/api/static/images/coinimage/USDT.png"  height='20px' width='20px' alt="" />&nbsp; USDT </MenuItem>

          <MenuItem sx={{display:'flex', alignItems:'center'}} value={"btc"}><img src="http://64.227.140.80/api/static/images/coinimage/BTC.png"  height='20px' width='20px' alt="" />&nbsp; BTC</MenuItem>
          <MenuItem sx={{display:'flex', alignItems:'center'}} value={"eth"}><img src="http://64.227.140.80/api/static/images/coinimage/ETH.png"  height='20px' width='20px' alt="" />&nbsp; ETH</MenuItem>
        </Select>
        <TextField  type='number'  id="amountbox" sx={{height:'40px' ,input:{color:"grey"}, width:'80%',border:'1px solid grey'}} size='small' placeholder='Amount' /></div>
        <div></div>
        <Button  sx={{marginTop:'10px'}} onClick={addmn} variant='contained'>Add Money</Button>
        </Container>
    
            </Container>
    </>
  )
}

export default Addmoney