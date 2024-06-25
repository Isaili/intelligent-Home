// App.jsx
import React, { useState } from 'react';
import DivComponent from './components/DivComponent'; 
import DivPorton from './components/DivPorton';
import DivCuarto from './components/DivCuarto';
import Porton from './components/Porton';
import Foco from './components/Foco';
import Puerta from './components/Puerta';
import Aire from './components/Aire';
import Control from './Control/Control';
import Login from './Login/Login';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
  <Login/>
         {/* <DivComponent />
      <DivPorton />
      <DivCuarto />
      <Porton/>
      <Foco/> 
      <Puerta/> 
      <Aire/> 
      <Control/> */}
      
    </div>
  );
}

export default App;
