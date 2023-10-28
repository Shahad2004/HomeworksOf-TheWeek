import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState('primary');

  const increase = () => {
    setCount(count + 1);
    setButtonColor('success');
  };

  const decrease = () => {
    setCount(count - 1);
    setButtonColor('warning');
  };

  const setToZero = () => {
    setCount(0);
    setButtonColor('danger');
  };

  return (
    <div className="container text-center mt-5">
      <h2>Counter ~ H.W</h2>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <button className={`btn btn-${buttonColor} m-2`} onClick={increase}>
          Increase!
        </button>
        <button className={`btn btn-${buttonColor} m-2`} onClick={decrease}>
          Decrease!
        </button>
        <button className={`btn btn-${buttonColor} m-2`} onClick={setToZero}>
          Set It To Zero!
        </button>
      </div>
      <div className="text-center mt-3">
        <h3>Count: {count}</h3>
      </div>
    </div>
  );
}

export default Counter;
