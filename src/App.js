import React from 'react';
import './App.css';
import Dinner from './dinner';

// Stateless Components
function App() {
  return (
    <div className="App">
      <Dinner Day="One" dishName="Chicken Karahi" desertsName="Kheer" />
      <Dinner Day="Two" dishName="Chicken Biryani" desertsName="Gajar Kaa Halwa" />
      <Dinner Day="Three" dishName="Beef Biryani" desertsName="Rus Golla" />
    </div>
  );
}

export default App;
