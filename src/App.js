import React from 'react'
import { I18nProvider } from '@lingui/react';
import i18n from './Components/i18n';
import Registration from './Components/Users/Registration'
import Login from './Components/Users/Login'
import HomePage from './Components/Home/HomePage'
import UserKyc from './Components/Users/UserKyc/UserKyc'
import Logout from './Components/Users/Logout'
import UserPanel from './Pages/UserPanel'
import Dashboard from './Pages/Dashboard'
import TradeHistory from './Components/Users/TradeHistory'
import Security from './Components/Users/Security'
import TransactionHistory from './Components/Users/TransactionHistory'
import Wallet from './Components/Users/Wallet/Wallet'
import User from './Components/Admin/User'
import Test from './Test'
import Limit from './Components/Users/Coindata/Limit'
import Coin from './Components/Users/Coindata/Coin'
import Stoplimit from './Components/Users/Coindata/StopLimit'

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Trade from './Pages/Trade'
import BuyCoin from './Components/Users/Coindata/BuyCoin'
import AdminPanel from './AdminPage/AdminPanel'
import AllUsers from './Components/Admin/AllUsers'
import Airdrop from './Components/Admin/Airdrop'
import AddCustomCoin from './Components/Admin/AddCustomCoin'
import Vcode from './Components/Users/Vcode'
import Chart from './Components/Users/Chart'
import Referral from './Components/Users/Referral'
import AirdropContest from './Components/Users/AirdropContest'
import RequestCall from './Components/Home/RequestCall'
import Addmoney from './Components/Users/Wallet/Addmoney'
import Withdraw from './Components/Users/Wallet/Withdraw'
import Showwallet from './Components/Users/Wallet/Showwallet'
import Data24hr from './Components/Users/Data24hr'
import TradeTicker from './Components/Users/TradeTicker'
import Google2FA from './Components/Users/Google2FA'
import CustomChart from './Components/Users/CustomChart'


function App() {
  return (
    <>
     
      <BrowserRouter>
     
    <Routes>
      
      <Route exat path='/' element={<HomePage/>}/>
      <Route exat path='/userpanel' element={<UserPanel/>}>
      

      <Route exact path="/userpanel/userkyc" element={<UserKyc/>}/>
      
      
      <Route exact path="/userpanel/transactionhistory" element={<TransactionHistory/>}/>
      
      <Route exact path="/userpanel/wallet" element={<Showwallet/>}>
      <Route exact path="/userpanel/wallet/addmoney" element={<Addmoney/>}/>
      <Route exact path="/userpanel/wallet/withdraw" element={<Withdraw/>}/>
      </Route>

      



      <Route exact path="/userpanel/tradehistory" element={<TradeHistory/>}/>
      <Route exact path="/userpanel/referral" element={<Referral/>}/>
      <Route exact path="/userpanel/userdashboard" element={<Dashboard/>}/>
      <Route exact path="/userpanel/security" element={<Security/>}/>
    
      
      </Route>
      {/* Limit and Market */}
      <Route exact path="/trade" element={<Trade/>}>
      <Route exact path="/trade/limit" element={<Limit/>}/>
      <Route exact path="/trade/stoplimit" element={<Stoplimit/>}/>
      </Route>



      <Route exact path="/Logout" element={<Logout/>}/>
      <Route exact path="/reqcall" element={<RequestCall/>}/>
      {/* <Route exact path="/trade" element={<Trade/>}/> */}
      <Route exact path="/chart" element={<Chart/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/testoy" element={<Test/>}/>
      <Route exact path="/bycoin" element={<BuyCoin/>}/>
      <Route exact path="/vcode" element={<Vcode/>}/>
      <Route exact path="/airdropcontest" element={<AirdropContest/>}/>
      <Route exact path="/data24" element={<Data24hr/>}/>
      <Route exact path="/ticker" element={<TradeTicker/>}/>
      <Route exact path="/google2fa" element={<Google2FA/>}/>
      <Route exact path="/customchart" element={<CustomChart/>}/>
     
        

      {/* admin routes */}
      <Route exat path='/admin' element={<AdminPanel/>}>
      <Route exat path='/admin/allusers' element={<AllUsers/>}/>
      <Route exat path='/admin/airdrop' element={<Airdrop/>}/>
      <Route exat path='/admin/addcoin' element={<AddCustomCoin/>}/>

        </Route>

          </Routes>
         
  </BrowserRouter>
    
    

    
    </>
    
    )
}

export default App