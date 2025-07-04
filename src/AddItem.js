import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ input, handleInput, handleSubmit }) => {
  return (
    <form className="AddItem" onSubmit={(e) => handleSubmit(e)}>
      <input
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Add Item"
        required
      ></input>
      <button>
        <FaPlus></FaPlus>
      </button>
    </form>
  );
};

export default AddItem;
