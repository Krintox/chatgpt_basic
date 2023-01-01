import React, {useState} from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    .then((res) => res.json())
    .then((data => setResponse(data.message)));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Enter the specifications of the gift that u want to gift ur friend</h1>
        <textarea 
          value = {message}
          onChange = {(e) => setMessage(e.target.value)}
        ></textarea><br />
        <button type='submit'>Submit</button>
      </form><br />
      <div>{response}</div>
    </div>
  );
}

export default App;
