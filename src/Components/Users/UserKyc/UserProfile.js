import React, { useState , useEffect} from 'react'
import {Container, Box} from '@mui/material'
import User6 from '@mui/icons-material/AccountCircle';
import axios from 'axios'

const UserProfile = () => {

    const [user, setUser] = useState(0)

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


<Container sx={{backgroundColor:'#1C2230' , color:'white' ,width:'auto', height:'7vh' , display:'flex' , alignItems:'center', justifyContent:'', gap:{sm:'20px',xs:'10px'} , padding:'10px', display:{xs:'none', sm:'flex', borderRadius:'9px'}}}>

<Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                             
                                    <User6 sx={{color:'grey' , fontSize:{sm:'50px',xs:'30px'}}} />

</Box>


<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'rgb(56 62 80)', fontSize:{sm:'12px',xs:'10px'}, fontWeight:'600'}}>User ID</div>
    <Box sx={{fontSize:'11px', color:'grey'}}>
    { user && user[0].userid.slice(0, 7)+ "xxxxxx.."}
    </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'rgb(56 62 80)', fontSize:'12px', fontWeight:'600'}}>User Name</div>
    <Box sx={{fontSize:'11px', color:'grey'}}>
    { user && user[0].Name.toUpperCase()}
    </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'rgb(56 62 80)', fontSize:'12px', fontWeight:'600'}}>Account Type</div>
    <Box sx={{fontSize:'11px',color:'grey'}}>
Regular
    </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'rgb(56 62 80)', fontSize:'12px', fontWeight:'600'}}>Last Login</div>
    <Box sx={{fontSize:'11px', color:'grey'}}>
    { user && user[0].lastlogin}
    </Box>
</Box>







</Container>



                        </div>
        </>
  )
}

export default UserProfile