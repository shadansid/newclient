import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
function DynamicText({ texts }) {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(texts[index]);
      setIndex((index + 1) % texts.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [texts, index]);

  return (
    <div id="text-container">
      <Box id="text" sx={{transition:'0.5s ease-in-out', fontSize:{xs:'13px',sm:'23px'} , color:'grey', fontWeight:'200', display:'flex'}}>{displayText}</Box>
    </div>
  );
}

export default DynamicText;