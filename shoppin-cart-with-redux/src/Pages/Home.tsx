import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/Reducers/counterSlice';
import { RootState } from '../Redux/Reducers/RootReducer';
import { AppDispatch } from '../Redux/Store';
const Home = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
    </div>
  )
}

export default Home
