import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Card from "./components/Card";
import Button from "./components/Button/Button";
import Students from "./components/Students";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import List2 from "./components/List2";

function App() {
  const fruits = [
    {
      id: 1,
      name: "apple",
      calories: 95,
    },
    {
      id: 2,
      name: "orange",
      calories: 70,
    },
    {
      id: 3,
      name: "banana",
      calories: 150,
    },
    {
      id: 4,
      name: "coconut",
      calories: 105,
    },
    {
      id: 5,
      name: "pineapple",
      calories: 45,
    },
  ];

  const vegs = [
    {
      id: 6,
      name: "ape",
      calories: 95,
    },
    {
      id: 7,
      name: "orae",
      calories: 70,
    },
    {
      id: 8,
      name: "bana",
      calories: 150,
    },
    {
      id: 9,
      name: "cocot",
      calories: 105,
    },
    {
      id: 10,
      name: "pineap",
      calories: 45,
    },
  ];

  return (
    <div className="border-2 border-black m-2 flex flex-col gap-5 justify-center items-center h-[500px]">
      <List2 list={fruits} name="MY FRUITS - GEETH Co"></List2>
      <List2 list={vegs} name="MY VEGETABLES - GEETH Co"></List2>
    </div>
  );
}

export default App;
