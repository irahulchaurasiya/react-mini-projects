import React, { useState } from "react";

const App = () => {
  const [leftItems, setLeftItems] = useState([
    { id: "html", name: "HTML", selected: false },
    { id: "css", name: "CSS", selected: false },
    { id: "java", name: "JAVA", selected: false },
    { id: "typeScript", name: "TYPESCRIPT", selected: false },
  ]);

  const [rightItems, setRightItems] = useState([
    { id: "pyhton", name: "PYHTON", selected: false },
    { id: "react", name: "REACT", selected: false },
    { id: "node", name: "NODE", selected: false },
    { id: "chakra", name: "CHAKRA", selected: false },
  ]);

  const handleSelection = (id) => {
    setLeftItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
    setRightItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  function moveAllToRight() {
    setRightItems((prev) => [...prev, ...leftItems]);
    setLeftItems([]);
  }

  function moveToRight() {
    const selectedItems = leftItems.filter((item) => item.selected);
    setRightItems((prev) => [...prev, ...selectedItems]);
    setLeftItems((prev) => prev.filter((item) => !item.selected));
    clearSelection();
  }

  function moveToLeft() {
    const selectedItems = rightItems.filter((item) => item.selected);
    setLeftItems((prev) => [...prev, ...selectedItems]);
    setRightItems((prev) => prev.filter((item) => !item.selected));
    clearSelection();
  }

  function moveAllToLeft() {
    setLeftItems((prev) => [...prev, ...rightItems]);
    setRightItems([]);
  }

  function clearSelection() {
    setRightItems((prev) => prev.map((item) => ({ ...item, selected: false })));
    setLeftItems((prev) => prev.map((item) => ({ ...item, selected: false })));
  }
  return (
    <div>
      <div className="text-center mb-2">Transfer list</div>
      <div className="flex justify-center m-2">
        <div className=" p-2 border-2 border-black m-2">
          {leftItems.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                checked={item.selected}
                onChange={() => handleSelection(item.id)}
              ></input>
              <label>{item.name}</label>
            </div>
          ))}
        </div>
        <div className="p-2 border-2 border-black flex flex-col m-2">
          <button
            disabled={leftItems.length === 0}
            onClick={moveAllToRight}
            className="border-2 border-black m-2"
          >{`>>`}</button>
          <button
            disabled={leftItems.every((item) => !item.selected)}
            onClick={moveToRight}
            className="border-2 border-black m-2"
          >{`>`}</button>
          <button
            disabled={rightItems.every((item) => !item.selected)}
            onClick={moveToLeft}
            className="border-2 border-black m-2"
          >{`<`}</button>
          <button
            disabled={rightItems.length === 0}
            onClick={moveAllToLeft}
            className="border-2 border-black m-2"
          >{`<<`}</button>
        </div>
        <div className="p-2 border-2 border-black m-2">
          {rightItems.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                checked={item.selected}
                onChange={() => handleSelection(item.id)}
              ></input>
              <label>{item.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
