import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  function handleToggles(e) {
    const action = e.target.name;
    const value = parseInt(inputValue) || 0;
    if (action === "increment") {
      setCount((prev) => prev + value);
    } else if (action === "decrement") {
      setCount((prev) => prev - value);
    } else if (action === "reset") {
      setCount(0);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <header className="w-full pt-4 pb-4 text-4xl shadow-md text-center font-bold">
        Counter
      </header>
      <section className="w-full text-center">
        <div className="w-full text-2xl text-center">{count}</div>
        <button
          name="decrement"
          onClick={handleToggles}
          className="w-20 h-20 bg-gray-200 mr-2"
        >
          -
        </button>
        <button
          name="increment"
          onClick={handleToggles}
          className="w-20 h-20 bg-gray-200"
        >
          +
        </button>
        <input
          onChange={handleInputChange}
          type="text"
          name="value"
          id="value"
          placeholder="value"
        />
        <button
          name="reset"
          onClick={handleToggles}
          className="w-20 h-20 bg-gray-200"
          type="reset"
        >
          Reset
        </button>
      </section>
    </div>
  );
};

export default App;
