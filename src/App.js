import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import AddItem from "./AddItem.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";

function App() {
  const storedData = JSON.parse(localStorage.getItem("items"));

  const [items, setItems] = useState(
    storedData
      ? storedData
      : [
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
        ]
  );

  const [input, setInput] = useState("");

  const [searchInput, setSearchInput] = useState("");

  const handleClick = (id) => {
    const newList = items.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setItems(newList);

    localStorage.setItem("items", JSON.stringify(newList));
  };

  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);

    localStorage.setItem("items", JSON.stringify(newList));
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

    localStorage.setItem("items", JSON.stringify(newList));
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        input={input}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
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
