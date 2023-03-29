import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useContext, useEffect, useState, useReducer } from 'react'
import Context from '../../hooks/useTheme';


const HomePage = () => {
  
  
  const reducer = (state, action) => {

    switch(action.type){

        case "update":
            return action.payload
        default:
            throw new Error()
    }


}

const [state,dispatcher] = useReducer(reducer,{color:'#ffffff'})
  
  return (
   
    <Context.Provider value={{
      color:state.color,
      dispatcher : dispatcher
  }}>
    <div style={{ backgroundColor: 'white' }}>
   <Header></Header>
   <Main color={state.color} ></Main>
   <Footer color={state.color}></Footer>
   
      </div>
      </Context.Provider>
  )
}

export default HomePage