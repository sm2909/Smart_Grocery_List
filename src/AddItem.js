import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  return (
    <form className="AddItem">
      <input placeholder="Add Item" required></input>
      <button>
        <FaPlus></FaPlus>
      </button>
    </form>
  );
};

export default AddItem;
