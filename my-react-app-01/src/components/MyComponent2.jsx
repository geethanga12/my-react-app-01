import React, { useState } from "react";

export default function MyComponent2() {
  const [name, setName] = useState("Guest");
  const [quantity, setQty] = useState(0);
  const [comment, setCm] = useState("Comment");
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQtyChange(event) {
    setQty(event.target.value);
  }

  function handleComment(event) {
    setCm(event.target.value);
  }

  function handlePayChange(event) {
    setPayment(event.target.value);
  }

  function handleDelivery(event) {
    setDelivery(event.target.value);
  }

  return (
    <div className="m-5">
      <input
        className="border-2 p-1"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <p>Name: {name}</p>

      <input
        className="border-2 p-1 mt-5"
        type="number"
        value={quantity}
        onChange={handleQtyChange}
      />
      <p>Qty: {quantity}</p>

      <textarea
        placeholder="Your Comment"
        onChange={handleComment}
        value={comment}
        className="mt-7 border-2 h-[100px] w-[300px] p-1"
        name="cm"
        id="cm"
      ></textarea>
      <p>{comment}</p>

      <select value={payment} onChange={handlePayChange} name="pay" id="pay">
        <option value="">Select An Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>

      <div className="m-5 border border-red-500 p-5">
        <div>
          <input type="radio" id="r1" value="By Ship" 
            checked={delivery === "By Ship"}
            onChange={handleDelivery}/>
          <label className="ml-1" htmlFor="r1">
            By Ship
          </label>
        </div>
        <div>
          <input type="radio" id="r1" value='By Plane'
            checked={delivery === "By Plane"}
            onChange={handleDelivery}/>
          <label className="ml-1" htmlFor="r1">
            By Plane
          </label>
        </div>
        <p>Delivery: {delivery}</p>
      </div>
    </div>
  );
}
