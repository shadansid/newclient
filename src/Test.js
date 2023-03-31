import React , {useState} from 'react'

const Test = () => {
  
// i want to request the binance api for each time  
//   array1 = [
   
//     { symbol: 'ETH', quantity: 109 },
//     { symbol: 'BTC', quantity: 2 },
//     { symbol: 'SOL', quantity: 1200 },
//     { symbol: 'XRP', quantity: 788 }
// ]

  
  
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