import React, { useState } from 'react';
import axios from 'axios';
import Calculator from './Calculator';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [frontendResult, setFrontendResult] = useState('0');
  const [backendResult, setBackendResult] = useState('');

  const handleFrontendAddition = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setFrontendResult(result);
  };

  const handleBackendAddition = async () => {
    try {
      const response = await axios.post('http://localhost:5000/add', { num1: parseFloat(num1), num2: parseFloat(num2) });
      setBackendResult(response.data.result);

      // clear fields
      setNum1('');
      setNum2('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async () => {
    handleFrontendAddition();
    await handleBackendAddition();
  };

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  return (
    <Calculator
      num1={num1}
      num2={num2}
      frontendResult={frontendResult}
      backendResult={backendResult}
      handleNum1Change={handleNum1Change}
      handleNum2Change={handleNum2Change}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;
