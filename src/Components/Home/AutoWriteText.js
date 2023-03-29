import React, { useState, useEffect } from 'react';

function AutoWriteText({ text }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;
      if (index > text.length) {
        index = 0;
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="text-container">
      <span id="text" style={{fontSize:'23px' , color:'grey', fontWeight:'200'}}>{displayText}</span>
    </div>
  );
}

export default AutoWriteText;
