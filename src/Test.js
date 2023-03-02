import React , {useState} from 'react'

const Test = () => {
  
  
  
  return (
    
    <>
    <form action="/uploaduserdoc" method='POST' encType='multipart/form-data'>
    <input type="file" name='image' />
    <input type="submit" />

    </form>
    
    

    
    </>



  )
}

export default Test