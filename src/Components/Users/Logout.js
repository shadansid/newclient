import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Logout = () => {
  const [first, setFirst] = useState(0)
  const navilogout =  useNavigate()  
  
  useEffect(()=>{

        axios.get('http://139.84.137.232:8800/api/logout')
        .then(function (response) {
           
        })

        navilogout('/')

    },[])
   
    return (
  <>
 
  
  </> 
   
   
    
    )
}

export default Logout