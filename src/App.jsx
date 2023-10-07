import { useCount } from "./useCount"

function App() {
    const {count, increase, decrease, reset} = useCount()
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
