import React from "react";
import List from "./List.js";

const Main = ({ items, handleClick, handleDelete }) => {
  if (items.length !== 0) {
    return (
      <main>
        <List
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      </main>
    );
  } else {
    return <main>No items in list</main>;
  }
};

export default Main;
