import React from 'react'
import { useState } from 'react'
const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <div>
            <button onClick={() => setCount(count + 1)}>
                Add button
            </button>
            <button onClick={() => setCount(count - 1)}>
                Subtract button
            </button>
            <button onClick={() => setCount(0)}>
                Reset button
            </button>
            
        </div>
      
    </div>
  )
}

export default Counter