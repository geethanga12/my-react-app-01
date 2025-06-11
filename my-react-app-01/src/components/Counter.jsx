import React, { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);

  }

  const reset = () => {
    setCount(0)
  }

  return(
    <div className="text-3xl flex justify-center items-center h-screen">

      <div className="flex justify-center flex-col gap-y-[30px] items-center border-2 border-red-500 h-[310px] w-[400px]">

        <div><p>{count}</p></div>

        <div>
          <button className="bg-yellow-300 p-2 rounded-2xl" 
            onClick={increment}>Increment
          </button>
        </div>

        <div>
          <button className="bg-yellow-300 p-2 rounded-2xl" 
            onClick={decrement}>Drecement
          </button>
        </div>

        <div>
          <button className="bg-yellow-300 p-2 rounded-2xl" 
            onClick={reset}>Reset
          </button>
        </div>
      </div>

    </div>
  )

}