import React, { useReducer, useState} from 'react'
import context from '../hooks/useTheme2'

const Loading = () => {
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
      <><context.Provider value={{
        color:state.color,
        dispatcher : dispatcher
    }}>
          <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#171B26' }}>

              <img src={`http://139.84.137.232/api/static/images/loading2.gif`} height="30px" width='30px' alt="" />

      </div>
      </context.Provider>
      </>
  )
}

export default Loading