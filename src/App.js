import React from 'react';
import Counter from './Counter'

const App = (props) => (
  <div>
    <h1>

    </h1>
    <Counter
      startValue={5}
      min={-10}
      max={10}
    />
    <Counter/>
    <ForUpdate>
      
    </ForUpdate>
  </div>
)

export default App
