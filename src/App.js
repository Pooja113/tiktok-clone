import './App.css';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import Profile from './components/Profile';
import data from './fakeDate';

function App() {
  let [age,setAge] = useState(30);
  let [fullname,setName] = useState("Pooja")

  const getRandomName = async () => {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()
    //console.log(data.results[0].name.first);
    setName(data.results[0].name.first +' '+data.results[0].name.last)
    return fullname

  }

  useEffect(()=>{
    getRandomName()
  },[])

  return (
    <div>
      <h2>My age is = {age}</h2>
      <button onClick={()=>{setAge(age += 1)}}>+</button>
      <button onClick={()=>{setAge(age -= 1)}}>-</button>
      <Button title= "Buy Now" color="blue"/>
      <Button title= "Test" color= "red"/>
      {data.map( data=> (
        <Profile image={`https://robohash.org/${Math.random()}.png`} name={fullname} desc={data.desc} subTile={data.subTitle}/>
      ))}
    </div>
  );
}

export default App;
