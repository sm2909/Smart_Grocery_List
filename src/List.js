import React from "react";
import Item from "./Item.js";

const List = ({ items, handleClick, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          handleClick={handleClick}
          handleDelete={handleDelete}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default List;
