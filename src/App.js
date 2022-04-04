import './App.css';
import React, { useState } from 'react';
import Button from './Button';
import Profile from './components/Profile';
import data from './fakeDate';

function App() {
  let [age,setAge] = useState(30);
  return (
    <div>
      <h2>My age is = {age}</h2>
      <button onClick={()=>{setAge(age += 1)}}>+</button>
      <button onClick={()=>{setAge(age -= 1)}}>-</button>
      <Button title= "Buy Now" color="blue"/>
      <Button title= "Test" color= "red"/>
      {data.map( data=> (
        <Profile image={data.image} name={data.name} desc={data.desc} subTile={data.subTitle}/>
      ))}
    </div>
  );
}

export default App;
