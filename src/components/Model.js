import React, { useState } from 'react'

function Model() {


    let [input, setInput] = useState("");

  return (
    <div className='parent'>
      
      <h1>Parent Component</h1>
      <p>{input}</p>

      <div className='child'>
        <h2>Child Component</h2>

        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      </div>
    </div>
  )
}

export default Model
