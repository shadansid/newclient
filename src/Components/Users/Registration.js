import React, { useState, useReducer } from 'react';
import './css/Registration.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button, Checkbox, Backdrop, Typography, Box } from '@mui/material';
import TermsConditions from './TermsConditions'
import Vcode from './Vcode'
import { useNavigate } from 'react-router-dom';
import Header from '../Home/Header'
import Icon1 from '@mui/icons-material/CardGiftcardTwoTone';
import Icon2 from '@mui/icons-material/GroupTwoTone';
import Icon3 from '@mui/icons-material/MilitaryTechRounded';
import Security from '@mui/icons-material/VerifiedUser';
import Context from '../../hooks/useTheme';
export default function Registration() {


  const reducer = (state, action) => {

    switch (action.type) {

      case "update":
        return action.payload
      default:
        throw new Error()
    }


  }

  const [state, dispatcher] = useReducer(reducer, { color: '#171B26' })




  const [registered, setregister] = useState({})

  const [validemail, setvalidemail] = useState(false)
  const [validpass, setvalidpass] = useState(false)
  const [notvalid, setnotvalid] = useState(true)

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


  const navi = useNavigate()

  const redirect = () => {

    navi('/vcode')
  }

  if (registered.status === 200) {

    redirect();



  }


  const register = () => {

    let email = document.getElementById('xyzemail').value;
    let name = document.getElementById('xyzname').value;
    let pass = document.getElementById('xyzpass').value;
    let referralcode = document.getElementById('xyzreferral').value;



    const formdata = {

      name: name,
      email: email,
      password: pass,
      referralcode: referralcode


    }
    if (name === "" || email === "" || pass === "") {


    }

    setInterval(() => {
      setregister(false)

    }, 3000)

    setInterval(() => {
      setnotvalid(true)

    }, 3000) 

    if (validemail && validpass) {
      fetch('/adduser', {
        method: 'POST',
        body: JSON.stringify(formdata),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setregister(json)
          // sessionStorage.setItem("accessToken",json.accesstoken) 

        });


    } else {

      setnotvalid(false)

      if (validemail) {
        // console.log(" Use Strong password")

      } else {
        // console.log("Enter Valid email")

      }

      // console.log("use valid things")

    }






  }
  const [emailstate, setemailstate] = useState(0)
  // -----------------------------------------------handle Changes-------------------------------------------------------
  const handleChangeEmail = (e) => {


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log("Email invalid")
    if (e.target.value == "") {
      setemailstate(0)
    } else { setemailstate(1) }

    if (e.target.value.match(mailformat)) {
      console.log("Email is Correct")

      setvalidemail(true)

    }
    else {
      setvalidemail(false)

    }









  }
  const [pwdstate, setpwdstate] = useState(0)

  const handleChangeName = (e) => {


    // console.log(e)
  }

  const handleChangePass = (e) => {

    var PassExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (e.target.value == "") { setpwdstate(0) } else { setpwdstate(1) }

    if (e.target.value.match(PassExpression)) {
      console.log("Password Satisfy")
      setvalidpass(true)

    } else {

      setvalidpass(false)
    }



  }

  return (


    <>
      <Header />

      <Context.Provider value={{
        color: state.color,
        dispatcher: dispatcher
      }}>
        <Box sx={{ display: 'flex', height: '4vh', color: 'grey', fontSize: '11px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B202E' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}><Security sx={{ color: '#5661FF', fontSize: '16px' }} />&nbsp;Official website: https://btccrypto.exchange</Box>

        </Box>


        <div className="Registration" style={{
          display: 'flex', gap: '40px'

        }}>




          <div className="regbox0" style={{ display: 'flex', gap: '20px', backgroundColor: state.color, alignItems: 'center', padding: { xs: '20px' } }}>


            <div className="img">


            </div>

            <div className="regbox1" style={{ background: 'transparent' }}>




              <div style={{ color: '#5661FF', fontSize: '20px', padding: '20px' }}>Create Account
              </div>

              <div id="regbox">





                <div className="aligndiv">
                  <input onChange={handleChangeEmail}
                    id="xyzemail" fullWidth placeholder='Email Address' margin='dense'
                    label="Email" size="small" style={{ background: 'transparent', padding: '15px', width: '38ch', margin: '7px', border: '1px solid grey' }}
                    variant="outlined" />
                </div>



                {emailstate ? <div>{validemail ? <div style={{ color: 'green' }} > Email is Correct</div> : <div style={{ color: 'red' }}>Enter Valid Email</div>}</div> : <></>}



                <div className="aligndiv">
                  <input onChange={handleChangeName}
                    id="xyzname" placeholder='Full Name' style={{ background: 'transparent', padding: '15px', width: '38ch', margin: '7px', border: '1px solid grey' }}
                    label="Full Name" size="small" fullWidth margin='dense'
                    variant="outlined" />
                </div>



                <div className="aligndiv">
                  <input onChange={handleChangeName}
                    id="xyzreferral" placeholder='Refer code (Optional)' style={{ background: 'transparent', padding: '15px', width: '38ch', margin: '7px', border: '1px solid grey' }}
                    label="Refer code (Optional)" size="small" fullWidth margin='dense'
                    variant="outlined" />
                </div>




                <div className="aligndiv">
                  <input placeholder='Password' onChange={handleChangePass}
                    id="xyzpass" fullWidth style={{ background: 'transparent', padding: '15px', width: '38ch', margin: '7px', border: '1px solid grey' }}
                    label="Password" size="small"
                    margin='dense'
                    type='password'
                    variant="outlined" />
                </div>

                {pwdstate ? <div>{validpass ? <div style={{ color: 'green' }} > Strong Password</div> : <div style={{ color: 'red' }}> Password Must contain (Abc@231)</div>}</div> : <></>}

                <div className="checkbox">



                  <Checkbox disabled checked size="small" style={{ color: '#5661FF' }} /> <p style={{ cursor: 'pointer' }} onClick={handleToggle}>Accept <span style={{ color: '#5661FF' }}>User Agreement</span> And <span style={{ color: '#5661FF' }}>Privacy Policy</span></p> </div>



                <Backdrop
                  sx={{ color: '#000000', backgroundColor: '#ffffff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                  onClick={handleClose}
                >
                  <TermsConditions></TermsConditions>
                </Backdrop>



                <Button variant="outlined" onClick={register} style={{ backgroundColor: '#5661FF', color: 'white' }} endIcon={<KeyboardArrowRightOutlinedIcon />}>Register</Button>



                {registered ? <p style={{ color: '#5661FF', textAlign: 'center', marginTop: '7px' }}>{registered.msg}</p> : <div></div>}

                {!(notvalid) ? <p style={{ color: '#5661FF', textAlign: 'center', marginTop: '7px' }}>Check Your Credentials</p> : <div></div>}







              </div>
              <Box sx={{ color: 'grey', paddingTop: '20px', textAlign: 'center' }}>Already have an account? <span style={{ color: '#5661FF' }}>Log In</span></Box>
            </div>
  


          </div>

          <Box sx={{ display: { sm: 'flex', xs: 'none' }, flexDirection: 'column', gap: '10px', alignItems: '', width: '500px', backgroundColor: '' }}>

            <Box sx={{ backgroundColor: '#1F2433', borderRadius: '9px', display: 'flex', gap: '10px', padding: '20px' }}>
              {/* <Icon1 sx={{ fill: '#3C6AF8', stroke: '', fontSize: '42px' }} /> */}
              <img src='http://153.92.223.84/api/static/images/gift.png' height='50px' width='50px' />

              &nbsp; <Box>
                <Box sx={{ fontSize: '16px', color: 'white', marginBottom: '10px' }}>Win up to $100 in Welcome Rewards</Box>
                <Box sx={{ color: '#4D4E59' }}>Complete Beginner Tasks & Win Awesome Prize</Box></Box>
            </Box>
            <Box sx={{ backgroundColor: '#1F2433', borderRadius: '9px', display: 'flex', gap: '10px', padding: '20px' }}>
              <img src='http://153.92.223.84/api/static/images/invite.png' height='50px' width='50px' />
              {/* <Icon2 sx={{ fill: 'orange', stroke: '', fontSize: '42px' }} /> */}
              &nbsp; <Box >
                <Box sx={{ fontSize: '16px', color: 'white', marginBottom: '10px' }}>Invite Friends and Earn Rewards
                </Box>
                <Box sx={{ color: '#4D4E59' }}>Get trading fee discount and up to 40% commission with your friends
                </Box></Box>
            </Box>
            <Box sx={{ backgroundColor: '#1F2433', borderRadius: '9px', display: 'flex', gap: '10px', padding: '20px' }}>
              <img src='http://153.92.223.84/api/static/images/reward.png' height='50px' width='50px' />
              {/* <Icon3 sx={{ fill: '#F4C184', stroke: '', fontSize: '42px' }} /> */}
              &nbsp; <Box>
                <Box sx={{ fontSize: '16px', color: 'white', marginBottom: '10px' }}>Enjoy $5,000,000+ Prize Pools</Box>
                <Box sx={{ color: '#4D4E59' }}>Participate in Activities to Win Mega Rewards</Box></Box>
            </Box>



          </Box>
          <Box sx={{ position: 'fixed', backgroundColor: '#1B202E', bottom: '0px', height: '5vh', width: window.innerWidth, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'grey' }}><Security sx={{ color: '#5661FF', fontSize: '16px' }} />&nbsp;Secured by Google</Box>
        </div>
      </Context.Provider>
    </>




  )
}
