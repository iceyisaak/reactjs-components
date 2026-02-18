import { useState } from 'react'
import TestComponent from './components/TestComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestComponent/>
    </>
  )
}

export default App
