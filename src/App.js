import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import AddItem from "./AddItem.js";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "Milk",
      isChecked: false,
    },
    {
      id: 2,
      item: "Bread",
      isChecked: false,
    },
    {
      id: 3,
      item: "Eggs",
      isChecked: false,
    },
  ]);

  const [input, setInput] = useState("");

  const handleClick = (id) => {
    const newList = items.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setItems(newList);
  };

  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  const handleInput = (newInput) => {
    setInput(newInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newList = [
      ...items,
      {
        id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
        item: input,
        isChecked: false,
      },
    ];

    setItems(newList);

    setInput("");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        input={input}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <Main
        items={items}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
