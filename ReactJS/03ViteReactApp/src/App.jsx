import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count < 20) {
    setCount((prevCount) => prevCount + 1 );
    setCount((prevCount) => prevCount + 1 );
    setCount((prevCount) => prevCount + 1 );
    }
  }

  const removeValue = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1 );
      setCount((prevCount) => prevCount - 1 );
    }
  }

  return (
    <>
      <h2>React Project Counter</h2>
      <h3>Count Value {count}</h3>
      <button onClick={addValue}>Add Value {count}</button>
      <button onClick={removeValue}>Add Value {count}</button>
    </>
  )
}

export default App
