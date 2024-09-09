import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function decrement() {
    let newCount = count - 1;
    setCount(newCount);
    localStorage.setItem('count',JSON.stringify(newCount))
  }
  function increment() {
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count',JSON.stringify(newCount))
  }
  useEffect(() => {
    let oldCount=JSON.parse(localStorage.getItem('count'));
    setCount(oldCount)
  }
  );

  return (
    <div>
      <h2>Counter....</h2>
      <button onClick={() => decrement()}>-</button>
      <span> {count}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}
