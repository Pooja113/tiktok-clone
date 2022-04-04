import './App.css';
import React, { useState } from 'react';

function App() {
  let [age,setAge] = useState(30);
  return (
    <div>
      <h2>My age is = {age}</h2>
      <button onClick={()=>{setAge(age += 1)}}>+</button>
      <button onClick={()=>{setAge(age -= 1)}}>-</button>
    </div>
  );
}

export default App;
