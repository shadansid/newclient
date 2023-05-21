import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const AddFund = () => {
  const [response, setResponse] = useState('');

  const addFund = async () => {
    const userid = document.getElementById('userid').value;
    const currency = document.getElementById('currency').value;
    const quantity = document.getElementById('quantity').value;

    try {
      const res = await axios.post('/addfund', { userid, currency, quantity });
      setResponse(res.data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input id="userid" type="text" placeholder="User ID" />
      <input id="currency" type="text" placeholder="Currency" />
      <input id="quantity" type="text" placeholder="Quantity" />
      <Button onClick={addFund} variant="contained">
        Add Fund
      </Button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default AddFund;
