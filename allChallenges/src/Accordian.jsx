import React, { useState } from "react";

const questions = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet?",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae neque nec nisl scelerisque vulputate.",
  },
  {
    id: 2,
    title: "Consectetur Adipiscing Elit?",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Sed Do Eiusmod Tempor Incididunt?",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod elit at ante laoreet, a dignissim orci interdum.",
  },
  {
    id: 4,
    title: "Ut Labore Et Dolore Magna Aliqua?",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit eros nec metus gravida, ac consequat magna efficitur.",
  },
  {
    id: 5,
    title: "Aenean Auctor Dolor Ut Nisi Dapibus?",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor dolor ut nisi dapibus, id scelerisque ligula suscipit.",
  },
];

function Accordian() {
  const [multiple, setMultiple] = useState(true);
  const [expandedIds, setExpandedIds] = useState([]);

  const handleAccordionClick = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((currId) => currId !== id));
    } else {
      setExpandedIds(multiple ? [...expandedIds, id] : [id]);
    }
  };

  const handleToggleMultiple = () => {
    setMultiple((prev) => {
      const newValue = !prev;
      if (!newValue) {
        setExpandedIds([]);
      }
      return newValue;
    });
  };

  return (
    <>
      <h1>Accordion</h1>
      <div>
        <label htmlFor="multiple-toggle">Allow multiple open sections?</label>
        <input
          type="checkbox"
          id="multiple-toggle"
          checked={multiple}
          onChange={handleToggleMultiple}
        />
      </div>

      <div>
        {questions.map(({ id, title, info }) => (
          <div key={id} style={{ border: "1px solid", margin: "4px 8px" }}>
            <p>{title}</p>
            <button onClick={() => handleAccordionClick(id)}>
              {expandedIds.includes(id) ? "-" : "+"}
            </button>
            {expandedIds.includes(id) && <p>{info}</p>}
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordian;
