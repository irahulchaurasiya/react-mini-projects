// import { useState } from "react";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [value, setValue] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const getTodoValue = (e) => {
//     setValue(e.target.value);
//   };

//   const toggleSubmit = (e) => {
//     if (value) {
//       if (isEditing) {
//         setTodos((prev) => {
//           const newTodos = [...prev];
//           newTodos[editIndex] = value;
//           return newTodos;
//         });
//         setIsEditing(false);
//         setEditIndex(null);
//       } else {
//         setTodos((prev) => [...prev, value]);
//       }
//       setValue("");
//     }
//   };

//   const toggleCancel = () => {
//     setValue("");
//     if (isEditing) {
//       setIsEditing(false);
//       setEditIndex(null);
//     }
//   };

//   const handleEdit = (index) => {
//     setValue(todos[index]);
//     setIsEditing(true);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     setTodos((prev) => {
//       const newTodos = [...prev];
//       newTodos.splice(index, 1);
//       return newTodos;
//     });
//   };

//   return (
//     <div className="w-full h-full flex flex-col items-center">
//       <header>Todo List</header>
//       <section>
//         <div>
//           <input
//             className="border-2 border-black rounded-md"
//             type="text"
//             name="value"
//             placeholder="Enter your todo"
//             value={value}
//             onChange={getTodoValue}
//           />
//         </div>
//         <div className="mt-2">
//           <button
//             onClick={toggleSubmit}
//             className="border-2 border-black rounded-md mr-2"
//           >
//             {isEditing ? "Update" : "Submit"}
//           </button>
//           <button
//             onClick={toggleCancel}
//             value="cancel"
//             className="border-2 border-black rounded-md ml-2"
//           >
//             Cancel
//           </button>
//         </div>
//         <p>Double click on todo to toggle completion status</p>
//         <div className="mt-2">
//           {todos.map((todo, index) => (
//             <div id={index} className="flex mt-2">
//               <div className="w-24">{todo}</div>
//               <button
//                 className="border-2 mr-1"
//                 value="edit"
//                 onClick={() => handleEdit(index)}
//               >
//                 edit
//               </button>
//               <button
//                 className="border-2 ml-1"
//                 value="delete"
//                 onClick={() => handleDelete(index)}
//               >
//                 delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const getTodoValue = (e) => {
    setValue(e.target.value);
  };

  const toggleSubmit = () => {
    if (value) {
      if (isEditing) {
        todos[editIndex] = value;
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setTodos((prev) => {
          const newTodos = [...prev, value];
          return newTodos;
        });
      }
    }

    setValue("");
  };

  const toggleCancel = () => {
    setIsEditing(false);
    setValue("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setValue(todos[index]);
    setIsEditing(true);
  };

  const handleDelete = (index) => {
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <header>Todo List</header>
      <section>
        <div>
          <input
            className="border-2 border-black rounded-md"
            type="text"
            name="value"
            placeholder="Enter your todo"
            value={value}
            onChange={getTodoValue}
          />
        </div>
        <div className="mt-2">
          <button
            onClick={toggleSubmit}
            className="border-2 border-black rounded-md mr-2"
          >
            {isEditing ? "Update" : "Submit"}
          </button>
          <button
            onClick={toggleCancel}
            value="cancel"
            className="border-2 border-black rounded-md ml-2"
          >
            Cancel
          </button>
        </div>
        <p>Double click on todo to toggle completion status</p>
        <div className="mt-2">
          {todos.map((todo, index) => (
            <div id={index} className="flex mt-2">
              <div className="w-24">{todo}</div>
              <button
                className="border-2 mr-1"
                value="edit"
                onClick={() => handleEdit(index)}
              >
                edit
              </button>
              <button
                className="border-2 ml-1"
                value="delete"
                onClick={() => handleDelete(index)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
