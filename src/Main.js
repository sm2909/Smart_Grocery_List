import React from "react";

const Main = () => {
  const names = ["Bob", "Dave", "Michael"];
  const random = Math.floor(Math.random() * 3);
  const name = names[random];

  function handleClick() {
    console.log("You clicked it");
  }

  const handleClick2 = (name) => {
    console.log(`${name} clicked it`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2("Sarang")}>Click me</button>
      <button onClick={(e) => handleClick3(e)}>Click me</button>
    </main>
  );
};

export default Main;
