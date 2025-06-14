import React, { useState } from 'react'

export default function ColorPicker() {

  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value)
  }

  return (
    <div className='color-picker-container p-5 flex flex-col items-center'>
      <h1 className='text-3xl font-medium mb-3'>Color Picker</h1>
      <div className='color-display w-[200px] h-[200px] flex justify-center items-center border-2 border-gray-500 rounded-[25px]' style={{backgroundColor: color}}>
        <p className='text-[hsl(0%, 0%, 20%)] text-[1.3rem] text-center'>Selected Color: {color}</p>  
      </div>
      <label className='text-[20px] font-medium mt-4'>Select a color: </label>
      <input className='
        w-[75px] h-[50px] p-[5px] border-[3px] rounded-[10px]
      ' type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}
