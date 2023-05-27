import React, { useReducer, useState, useContext } from 'react'
import Context from '../hooks/useTheme2'

const Loading = () => {
  const context = useContext(Context)

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: context?.color == '#ffffff' ? '#ffffff' : '#171B26',
        }}
      >
        <img
          src={`http://153.92.223.84/api/static/images/loading2.gif`}
          height="30px"
          width="30px"
          alt="" 
        />
      </div>
    </>
  )
}

export default Loading
