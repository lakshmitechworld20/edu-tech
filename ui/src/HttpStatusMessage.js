import React, { useState } from 'react';

const HttpStatusMessage = ({ selectedOption }) => {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/${selectedOption}`);
      setMessage(`Success: ${response.data}`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="http-status-message">
      <button onClick={fetchData}>Fetch Data</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default HttpStatusMessage;
