import React, { useState } from "react";

const Counter = () => {
  const initalcount = 0;
  const [count, setCounter] = useState(initalcount);
  //*usestate for objects
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //*useState for arrays
  const [items, setItems] = useState([]);

  const addItem = () => {
    console.log(items);

    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCounter(initalcount)}>Reset</button>
      <hr />
      <h1> Form using useState Object</h1>
      <from>
        <h2>Your firstName is -{name.firstName}</h2>
        <h2>Your lastName is -{name.lastName}</h2>
        <input
          type="text"
          value={name.firstName}
          placeholder="Enter your FirstName"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <br />
        <input
          type="text"
          value={name.lastName}
          placeholder="Enter your lastName"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </from>
      <hr />
      <div>
        <h2>useState for arrays</h2>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Counter;
