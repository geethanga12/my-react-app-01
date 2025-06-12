import React, { useState } from 'react'

export default function OnChange() {

  const [name, setName] = useState("Guest");

  function updateName(event) {
    setName(event.target.value)
  }

  return (
    <div className='m-5 p-5 border-2 border-red-500'>
      <input className='border-2 p-1' onChange={updateName} type="text" value={name}/>
      <p>Name: {name}</p>
    </div>
  )
}
