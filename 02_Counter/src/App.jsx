import { useState } from "react";
import "./App.css";


function App() {
  const [counter,setCounter]=useState(0)

  const addValue =()=>{
    // console.log(`Value Added ${Math.random()}`);
    // counter+=1
    if (counter <20){
    setCounter(counter+1)
    // setCounter(counter=>counter+1)
  
  }
  }

  const removeValue =()=>{
    if (counter >0){
      setCounter(counter-1)}
  }


  return (
    <>
      <h1>First React</h1>
      <h2> counter values {counter}</h2>
      <br />
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
