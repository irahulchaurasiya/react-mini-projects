import React, { useEffect, useState } from "react";

export default function App() {
  const questions = [
    { id: 1, title: "Question 1", info: "Answer to question 1." },
    { id: 2, title: "Question 2", info: "Answer to question 2." },
    { id: 3, title: "Question 3", info: "Answer to question 3." },
  ];

  const [multiple, setMultiple] = useState(true);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const setIdOfOpenAccordion = (id = null) => {
    setOpenAccordionId(multiple ? null : id);
  };

  const onMultipleChange = () => {
    if (multiple) {
      setOpenAccordionId(-1);
    }
    setMultiple(!multiple);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h4 className="mb-4">
        <label htmlFor="max-open" className="mr-2">
          Is multiple open accordion allowed?
        </label>
        <input
          type="checkbox"
          id="max-open"
          checked={multiple}
          onChange={onMultipleChange}
          className="h-4 w-4"
        />
      </h4>

      <div>
        {questions.map((question) => {
          const [show, setShow] = useState(false);

          const toggle = () => {
            setShow((prev) => !prev);
            setIdOfOpenAccordion(question.id);
          };

          useEffect(() => {
            if (openAccordionId) {
              setShow(openAccordionId === question.id);
            }
          }, [question.id, openAccordionId]);

          return (
            <div key={question.id} className="border border-gray-300 mb-2">
              <div className="flex items-center justify-between p-2 cursor-pointer">
                <h3 className="text-left text-sm">{question.title}</h3>
                <button
                  onClick={toggle}
                  className="flex items-center justify-center w-8 h-8 mx-2 text-lg text-white bg-gray-400 rounded-full"
                >
                  {show ? "-" : "+"}
                </button>
              </div>
              {show && (
                <p className="p-2 text-gray-700 text-sm">{question.info}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
