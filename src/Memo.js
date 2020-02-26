import React, { useState, useMemo, useCallback } from "react";
import { useEffect } from "react";

const Memo = () => {
  // We create two states that will keep count of the number of time all hooks are called
  const [callbackCount, setCallbackCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  const memoFunction = () => {
    console.log(memoCount, "memo called");
    // Do something that will take a lot of processing ...
  };

  // Here if we give an empty array of dependencies, the callback function will return the old value of callbackCount
  // because useCallback will return its memoized version
  const callbackFunction = useCallback(() => {
    console.log(callbackCount, "callback called");
    // Do something with callbackCount ...
    return callbackCount;
  }, [callbackCount]);

  // We create the memo hook, when memoCount changes, the function will be executed again
  useMemo(memoFunction, [memoCount]);

  return (
    <>
      {/* This component will receive a function that will change when the dependency value changes */}
      <ChildComponent action={callbackFunction} />

      {/* Change the callback hook dependency to trigger a change in the child */}
      <button style={{ cursor: 'pointer', border: 'none', width: 200, background: 'lightblue', padding: 10, marginRight: 5 }} onClick={() => setCallbackCount(callbackCount + 1)}>
        Change callback count
      </button>

      {/* After creating useMemo, each change of memoCount will trigger the function passed to the hook,
    otherwise the memoized value will be returned */}
      <button style={{ cursor: 'pointer', border: 'none', width: 200, background: 'lightblue', padding: 10, marginRight: 5 }} onClick={() => setMemoCount(memoCount + 1)}>
        Change memo count
      </button>
    </>
  );
};

const ChildComponent = ({ action }) => {
  const [value, setValue] = useState(0)
  console.log("action", action());
  useEffect(() => {
    let val = action()
    setValue(val)
  }, [action])

  return (
    <>
      <React.Fragment>
        <h3>Child : {value}</h3>
        <hr></hr>
      </React.Fragment>
    </>
  )
}

export default Memo;