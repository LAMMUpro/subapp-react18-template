import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>react 应用: {count}</div>
        <button onClick={() => setCount(count + 1)}>计数器+1</button>
      </div>
    </>
  );
}

export default App;
