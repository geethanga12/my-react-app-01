export default function List2({list, name}) {

  const newList = list.map((item) => (
    <li key={item.id}>{item.name}: {item.calories}</li>
  ));

  return(
    <div className="border-2 border-red-500 p-[10px]">
      <h1>{name}</h1>
      <ul>{newList}</ul>
    </div>
  );
}