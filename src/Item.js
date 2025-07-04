import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Item = ({ item, handleClick, handleDelete }) => {
  return (
    <li className="Item">
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => handleClick(item.id)}
      ></input>
      <label style={item.isChecked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        onClick={() => handleDelete(item.id)}
      ></FaTrashAlt>
    </li>
  );
};

export default Item;
