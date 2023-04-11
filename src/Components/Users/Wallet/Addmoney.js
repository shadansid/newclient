import React ,{useState}from 'react'
import {Container,Box,Button,TextField,InputLabel,Select,MenuItem, Typography} from '@mui/material'
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


axios.post('http://139.84.137.232/api/addmoney', {
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
    <Container sx={{padding:{sm:'20px',xs:'10px'},border:'1px solid #80808017' }}>
    {/* <div style={{position:'absolute' , top:'5', right:'5'}}><ClearIcon sx={{color:'black'}} /></div> */}
    {/* <div style={{padding:'20px'}}><Typography sx={{fontSize:{sm:'25px',xs:'12px'},color:'#7D8794'}}>Add Money</Typography></div> */}

        <Container style={{padding:'30px', display:'flex',flexDirection:'column' }}>
        <div>
       
        <Select  MenuProps={{
        style: {
          backgroundColor: '#171b268c', 
        },
      }} style={{height:'27px' , width:'18%', marginRight:'1px', color:'#7D8794', border:'1px solid grey',backgroundColor:'transparent'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          >
             
                <MenuItem sx={{display:'flex', alignItems:'center',color:'grey'}} value={"usdt"}> <img src="http://139.84.137.232/api/static/images/coinimage/USDT.png"  height='20px' width='20px' alt="" />&nbsp; USDT </MenuItem>

<MenuItem sx={{display:'flex', alignItems:'center',  color:'grey'}} value={"btc"}><img src="http://139.84.137.232/api/static/images/coinimage/BTC.png"  height='20px' width='20px' alt="" />&nbsp; BTC</MenuItem>
<MenuItem sx={{display:'flex', alignItems:'center',  color:'grey'}} value={"eth"}><img src="http://139.84.137.232/api/static/images/coinimage/ETH.png"  height='20px' width='20px' alt="" />&nbsp; ETH</MenuItem>
      
        </Select>
        <input  type='number'  id="amountbox" style={{background:'transparent',margin:'10px',height:'27px' ,input:{color:"grey"}, width:{xs:'60%',sm:'74%'},border:'1px solid grey', padding:'10px'}} size='small' placeholder='Amount' /></div>
        <div></div>
        <Button size='small' sx={{marginTop:'10px', fontSize:{sm:'14px',xs:'11px'}}} onClick={addmn} variant='contained'>Add Money</Button>
        </Container>
    
            </Container>
    </>
  )
}

export default Addmoney