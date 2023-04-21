import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import axios from 'axios'
import QRCode from 'qrcode.react';
const PaymentPannel = ({ closePaymentPage, address, inputdata, currency }) => {

  const [response, setresponse] = useState(0)



  const checkingPaymentLoop = async () => {

    const response = await axios.post(`http://139.84.137.232/api/checkpaymentloop`, {
      address,
      inputdata,
      currency

    });

    setresponse(response.data);





  }










  console.log("this is inside pymnt page " + address)










  return (
    <div> <Box sx={{
      height: '', backgroundColor: '', border: '0.1px solid grey'
      , padding: '30px'
    }}>


      <Box sx={{ backgroundColor: '', color: 'grey', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '20px', cursor: 'pointer' }} onClick={closePaymentPage}>X</Box>


      <Box sx={{ color: 'grey', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Amount : {inputdata}</Box>

      <Box sx={{ backgroundColor: '', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        {/* <img src="/static/images/qrcode.png"  alt="" /> */}
        <QRCode value={address} />


      </Box>
      <Box sx={{ color: 'grey', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}><Box sx={{ color: '#5661ff' }}>{currency.toUpperCase()}&nbsp;Address : {address}</Box></Box>



      <Box sx={{
        color: 'grey', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'
      }}>




        {currency == 'usdt' ? <Box sx={{ color: '#5661ff' }}>Please send BEP20 USDT only and&nbsp; </Box> : null}  click on the proceed button and make payment

      </Box>


      <Box x={{
        color: 'grey', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', alignItems: 'center'
      }}></Box>


      <Box sx={{ color: 'grey', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>

        note : dont not close or refresh the window while payment is in proccess.


      </Box>

      <Box sx={{ color: 'grey', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}> <Button sx={{
        backgroundColor: 'transparent'
        , color: 'grey'
      }} size='small' variant='contained' onClick={closePaymentPage}>cancel</Button>  <Button variant='contained' sx={{ backgroundColor: '#5661ff' }} size='small' onClick={checkingPaymentLoop}>proceed</Button></Box>




    </Box></div>
  )
}

export default PaymentPannel