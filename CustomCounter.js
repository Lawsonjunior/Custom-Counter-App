import React from 'react';
import useCustomCounter from './useCustomCounter';

function CustomCounter() {
  const { count, increment, decrement, reset, setValue } = useCustomCounter(0);

  return (
    <div>
      <h1>Custom Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}

export default CustomCounter;
