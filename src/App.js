import React, {useState} from 'react';
import {Message} from './Message';
import './App.css';

// Stateless Components
function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    /* <div className={`box dayLight`}>
       <div className="box dayLight"> 
       <div className={`box ${isMorning ? 'dayLight' : ''}`}> */
    
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count} />

      <br />

      <button onClick = { 
          // () => setCount(count + 1) //Note: Same as below
          () => setCount(++count) 
        }>
        Update Counter
      </button>

      <button onClick = { 
          () => setMorning(!isMorning) 
        }>
        Update Day
      </button>
    </div>
  );
}

export default App;
