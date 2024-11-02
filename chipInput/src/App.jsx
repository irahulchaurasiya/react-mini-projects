import { useState, useRef } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const submitFunction = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setList([...list, { id: Date.now(), text }]);
      setText("");
    }
  };

  const removeChip = (chipId) => {
    setList(list.filter((chip) => chip.id !== chipId));
  };

  return (
    <>
      <form onSubmit={submitFunction} className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Type & hit Enter"
          className="w-4/5 p-4 text-base"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className="flex flex-wrap justify-start">
        {list.map(({ id, text }) => (
          <span
            key={id}
            className="m-2 px-3 py-2 bg-gray-200 border border-light-gray rounded-full"
          >
            {text}{" "}
            <button
              className="border-none text-red-500 cursor-pointer"
              onClick={() => removeChip(id)}
              aria-label={`Remove chip ${text}`}
            >
              &#x2715;
            </button>
          </span>
        ))}
      </div>
    </>
  );
};

export default App;
