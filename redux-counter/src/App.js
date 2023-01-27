
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const App = () =>{
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state);
  const handleIncrement = () =>{
    dispatch({type:"increment"})
  }
  const handleDecrement = () =>{
    dispatch({type:"decrement"})
  }
  const double = () =>{
    dispatch({type:"double"})
  }
  const reset = () =>{
    dispatch({type:"reset"})
  }
  return(
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={double}>x2</button>
      <button onClick={reset}>Reset</button>
    </>
)};

export default App;
