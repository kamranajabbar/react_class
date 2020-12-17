import React, {useState} from 'react';
import Parent from './Parent';
import './App.css';
import counterContext from './CounterContext';

// Stateless Components
function App() {
  let countState = useState(1);  //[count, setCount]

  return (
    // Context API used here
    <counterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
