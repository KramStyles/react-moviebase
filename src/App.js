import { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((item) => item-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((item) => item+1)}>+</button>
    </div>
  )
}
