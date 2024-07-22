import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementBtAmount,
} from "../state/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();
  console.log("cliked");

  return (
    <div>
      <h2>{count}</h2>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementBtAmount(10))}>
          IncrementBy10
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
