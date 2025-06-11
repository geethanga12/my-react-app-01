import React, { useState } from "react";

export default function MyComponent() {

  const [name, setName] = useState("GUEST");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName("GEEHA")
  }

  const updateAge = () => {
    setAge(age + 1)
  }

  const toggleEmStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return(
    <div>
      <p>Name: {name}</p>
      <button className="bg-red-500 p-2 text-white mb-5" onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button className="bg-red-500 p-2 text-white mb-5" onClick={updateAge}>
        Set Age
      </button>

      <p>IS EMPLOYED: {isEmployed ? "Yes" : "No"}</p>
      <button className="bg-red-500 p-2 text-white mb-5" onClick={toggleEmStatus}>
        IS EMPLOYED
      </button>
    </div>
  )

}