import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decrement } from "./redux/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increament())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
