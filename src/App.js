import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
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

  return (
    <div className="App">
      <Header />
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
