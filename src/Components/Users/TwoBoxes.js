import React,{useState, useEffect} from 'react'
import { Box } from '@mui/material'
import axios from 'axios'
const TwoBoxes = ({ bg }) => {
  
  
  // BOX 1
  
  const [Data, setData] = useState(0)
  useEffect(() => {
  


    const getinoutdata = async () => {
      
      const result = await axios.get('/getinout')
      
      
      
      setData(result.data.msg)

      console.log(result.data)
      

    }


getinoutdata()


},[])  
  
  
  
  
  
  




  // BOX 2




  const [Data2, setData2] = useState(0)
  useEffect(() => {
  


    const getinoutdata2 = async () => {
      
      const result2 = await axios.get('/getout')
      
      
      
      setData2(result2.data.msg)

      console.log(result2.data)
      

    }


    getinoutdata2()


},[])  
  
  








  // BOX 3








  // Box 4
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <>
      <Box
        sx={{
          display: { sm: 'flex', xs: 'none' },
          justifyContent: '',
          gap: '20px',
          padding: { xs: '20px' },
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
        }}
      >
        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#321fdb' : '#1C2230',
            display: 'flex',
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '9px',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: (bg == '#ffffff'?'#ffffff':'cornflowerblue'),
              fontSize: '16px',
              paddingBottom: '10px',
            }}
          >
            {' '}
            Total Desposit
          </Box>
          <Box sx={{ color: (bg == '#ffffff'? '#ffffff':'grey'), fontSize: '16px' }}>  {Data && Data}</Box>
        </Box>

        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#3399ff' : '#1C2230',
            display: 'flex',
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '9px',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: (bg == '#ffffff'?'#ffffff':'cornflowerblue'),
              fontSize: '16px',
              paddingBottom: '10px',
            }}
          >
            {' '}
            Total Withdraw
          </Box>
          <Box sx={{ color: (bg == '#ffffff'? '#ffffff':'grey'), fontSize: '16px' }}> {Data2 && Data2}</Box>
        </Box>

        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#f9b116' : '#1C2230',
            display: 'flex',
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '9px',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: (bg == '#ffffff'?'#ffffff':'cornflowerblue'),
              fontSize: '16px',
              paddingBottom: '10px',
            }}
          >
            {' '}
            Total Balance
          </Box>
          <Box sx={{ color:(bg == '#ffffff'? '#ffffff':'grey'), fontSize: '16px' }}> $    </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#E55352' : '#1C2230',
            display: 'flex',
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '9px',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: (bg == '#ffffff'?'#ffffff':'cornflowerblue'),
              fontSize: '16px',
              paddingBottom: '10px',
            }}
          >
            {' '}
            Total Profit
          </Box>
          <Box sx={{ color: (bg == '#ffffff'? '#ffffff':'grey'), fontSize: '16px' }}> 0.00%</Box>
        </Box>
      </Box>
    </>
  )
}

export default TwoBoxes
