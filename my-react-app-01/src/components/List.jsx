import React from "react";

export default function List(props) {

  const category = props.category;
  const itemList = props.items;

  const listItem = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ))

  return(
    <div>
      <h2 className="bg-red-400 text-white text-[25px] mb-[10px]">{category}</h2>
      <ol className="bg-blue-400 text-white text-[15px] mb-[10px]">{listItem}</ol>
    </div>

  )
}


  // SORT LIST
  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => b.name.localeCompare(a.name));
  // fruits.sort((a, b) => a.calories - b.calories);
  // fruits.sort((a, b) => b.calories - a.calories);


  // FILTER LIST
  // const lowCalFruits = fruits.filter((fruit) => (
  //   fruit.calories < 100
  // ));

  // FILTER LIST
  // const highCalFruits = fruits.filter((fruit) => (
  //   fruit.calories > 100
  // ));
