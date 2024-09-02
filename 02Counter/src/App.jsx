
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounterValue] = useState(15);

  // let counter = 15;

  const incrementValue = ()=>{
    let updatedCounterValue  = counter+1;
    if(updatedCounterValue <=20){
    setCounterValue(updatedCounterValue);
    console.log("Value added", "Current Value is", counter,  Math.random());
    } else {
      console.log("Max increment value is 20, cannot increment beyond that");
    }
  }

  const decrementValue = ()=>{
    let updatedCounterValue  = counter-1;
    if(updatedCounterValue >= 0 ) {
      setCounterValue(updatedCounterValue);
      console.log("Value substracted", "Current Value is", counter,  Math.random());
    }  else {
      console.log("Min decrement value is 0, cannot decrement beyond that");
    }
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value : { counter }</h2>

      <button onClick={incrementValue}>Add Value</button>
      <button onClick={decrementValue}>Remove Value</button>
    </>
  )
}

export default App
