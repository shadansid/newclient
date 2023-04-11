import React, { useState , useEffect} from 'react'
import {Container, Box,Button} from '@mui/material'
import User6 from '@mui/icons-material/AccountCircle';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserProfile = ({bg}) => {

    const [user, setUser] = useState(0)
    const navigate = useNavigate();


    const Navigate = () => {
            navigate('/userpanel/wallet/addmoney')




    }

    const Navigate2 = () => {
        navigate('/userpanel/wallet/withdraw')




    }
    
    console.log("This is a propssssssssssssssssssssss" + bg)

const Navigate3 = () => {
    navigate('/trade')




}

    
    useEffect(() => {
        
        axios.get('http://139.84.137.232/api/userprofile')
        .then(response => {
            setUser(response.data)
            console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    
     
        
     
        return () => {
       
      }
    
    
    },[])
    
            
    
    
    return (
      


        <>
              <div style={{backgroundColor:'' ,padding:'10px', width:{xs:window.innerWidth}}}>


<Container sx={{backgroundColor:'#1C2230' , color:'white' ,width:'auto', height:'10vh' , display:'flex' , alignItems:'center', justifyContent:'', gap:{sm:'20px',xs:'10px'} , padding:'10px', display:{xs:'none', sm:'flex', borderRadius:'9px'}}}>

<Box sx={{ display: 'flex', flexDirection: 'row', padding: '10px', alignItems:'center' }}>
                             
                        <Box> <User6 sx={{ color: 'grey', fontSize: { sm: '70px', xs: '30px' } }} /></Box><Box sx={{marginLeft:'-29px'}}>
                            
                                <Box></Box>
                                <Box sx={{marginTop:'25px'}}><img src="http://139.84.137.232/api/static/images/levels/basic.png" height={"40px"} width={"40px"} alt="" /></Box>



                                   </Box>
</Box>


<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'grey', fontSize:'10px'}}>User ID :</div>
    <Box sx={{fontSize:'12px', color:'#cdcdcd'}}>
    { user && user[0].userid.slice(0, 7)+ "xxxxxx.."}
    </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'grey', fontSize:'10px'}}>User Name :</div>
    <Box sx={{fontSize:'12px', color:'#cdcdcd'}}>
    { user && user[0].Name.toUpperCase()}
    </Box>
</Box>

                    
    
<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'grey', fontSize:'10px'}}>Email :</div>
    <Box sx={{fontSize:'12px', color:'#cdcdcd'}}>
    { user && user[0].email}
    </Box>
</Box>




<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'grey', fontSize:'10px'}}>Account Type</div>
    <Box sx={{fontSize:'12px',color:'#cdcdcd'}}>
Regular
    </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'grey', fontSize:'10px'}}>Last Login :</div>
    <Box sx={{fontSize:'12px', color:'#cdcdcd'}}>
    { user && user[0].lastlogin}
    </Box>
</Box>



<Box sx={{ display: 'flex', gap: '50px', alignItems: 'center', height: '10vh',width:'100%',justifyContent:'flex-end' }}>
         
          
         <Box sx={{display:{sm:'flex', xs:'none'}, gap:'20px'}}>
         <Button onClick={Navigate} sx={{padding:'2px', fontSize:'10px', backgroundColor:'' }} variant="contained" size="small">Deposite</Button>
         <Button onClick={Navigate2} sx={{padding:'2px', fontSize:'10px', backgroundColor:'' }} variant="contained" size="small">Withdraw</Button>
         <Button onClick={Navigate3} sx={{padding:'2px', fontSize:'10px', backgroundColor:'' }} variant="contained" size="small">Buy Crypto</Button>
         </Box>
                 </Box>



</Container>



                        </div>
        </>
  )
}

export default UserProfile