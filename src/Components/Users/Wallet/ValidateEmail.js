import React, { useState, useEffect } from 'react'
import { Button, Alert } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const ValidateEmail = ({ coin, amount, email }) => {

    const navigateToWallet = useNavigate()

    const [code, setcode] = useState(0)

    const codeIput = (e) => {

        setcode(e.target.value)

    }

    const [Data, setData] = useState(0)

    const confirmation = async () => {


        let data = {
            code,
            coin,
            amount,
            email


        }

        const response = await axios.post('/confirmcodewithdraw', data);
        setData(response.data)
    }

    const hideResponse = () => {

        setData(0)
        navigateToWallet('/userpanel/wallet')


    }





    return (

        <>

            {/* <div>{coin && coin}</div>
            <div>{amount && amount}</div>
            <div>{email && email}</div> */}

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                <h3 style={{ color: 'grey' }}>Code Has been sent to your Email</h3>
                <input type="text" placeholder='Enter the Code here' onChange={codeIput} style={{ background: 'transparent', margin: '10px', height: '27px', input: { color: "grey" }, width: '74%', border: '1px solid grey', padding: '10px' }} />
                <Button disabled={code ? false : true} onClick={confirmation} variant='contained' size='small'>Submit</Button>

            </div>


            {Data.msg ? <div style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', height: '100vh', backgroundColor: 'rgb(23 27 38 / 85%)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', zIndex: '10' }}>


                <Alert sx={{ backgroundColor: '#1B202E', color: 'white', padding: '20px', boxShadow: '1px 1px -2px ', display: 'flex', flexDirection: 'column' }} severity="success">
                    <div>{Data.msg}</div>
                    <Button size='small' variant='contained' onClick={hideResponse}>OK</Button>

                </Alert>



            </div> : <></>}


        </>


    )
}

export default ValidateEmail