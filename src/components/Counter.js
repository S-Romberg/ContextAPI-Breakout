import React from 'react';
import { Consumer } from './Context'

const Counter = () => {
  return (
  <Consumer>
    { value => 
    <div>
        <h1>Count: {value.count}</h1>
        <button onClick={value.actions.increment}>Increment</button>
    </div>}
  </Consumer>
  )
}


export default Counter