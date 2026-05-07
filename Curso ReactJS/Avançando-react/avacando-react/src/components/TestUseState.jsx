import { useState } from "react"



const TestUseState = () => {
    const [number, setNumber] = useState(0)

  return (
    <div>
        <button onClick={() => setNumber(number + 1)}>+</button>
        <button>{number}</button>
        <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  )
}

export default TestUseState