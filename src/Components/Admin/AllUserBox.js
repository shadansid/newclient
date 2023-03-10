
import Switch from '@mui/material/Switch';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Arrow from '@mui/icons-material/KeyboardArrowDownOutlined';
import SideArrow from '@mui/icons-material/KeyboardArrowRightOutlined';
const AllUserBox = (props) => {
 
 
 
    const [checked, setChecked] = useState(true);
    const [disabled,setdisabled]= useState(false);



  const [details,setDetails] = useState(0)
  const  ShowDetails = () => {
   
    if (details == 0) {
          setDetails(1)
    } else {
      setDetails(0)
        }




    }
  
 


    const handleChange = (event) => {
  setChecked(event.target.checked);
  console.log(event.target.checked)
  axios({
      method: 'post',
      url: 'http://139.84.137.232/api/allowusers',
      data: {
        Allow: checked,
        userid:props.userid,
        email:props.email
        }
    });


};

 
 
 
 
    return (
   <>
        <div style={{ display: 'flex', alignItems: 'center', height: '10vh', border: '1px solid #2A2F3F' }}>
        <div  style={{ width: '10%', textAlign:'center' }}> {details?<Arrow onClick={ShowDetails} />:<SideArrow onClick={ShowDetails}/>}    </div>
          <div  style={{ width: '10%' }}>{props.Name}</div>
          
          <div style={{ width: '30%' }}>{props.email}</div>
          <div  style={{ width: '20%' }}>{ props.phone}</div>
       
          <div  style={{ width: '20%' }}>{ props.adharcard}</div>
          <div  style={{ width: '10%' }}><Switch onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} /></div>
        
        
        </div>
        
        {details ? <div style={{display:'flex'}}>

          <img src={ "http://139.84.137.232/api/userdoc/"+props.userid+".png"} alt="" height={200} width={300} />
          
          <div style={{display:'flex', flexDirection:'column',gap:'10px', justifyContent:'center', paddingLeft:'40px'}}>
            <div>UserID : { props.userid}</div>
            <div>Name : { props.Name}</div>
            <div>Email : { props.email}</div>
            <div>Phone : { props.phone}</div>
          <div>PanCard : {props.pancard}</div>
          <div>Adhar Number : {props.adharcard}</div>


          </div>

        </div>
        : <></>}

   </>
 
 
    )
}

export default AllUserBox