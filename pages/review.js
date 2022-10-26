import { useState } from "react";

export default function Review() {
  const [userInput, setUserInput] = useState("");
  const [toDoList, settoDolist] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    settoDolist([userInput, ...toDoList]);
    setUserInput("");
  };

  const handleDelete = (todo) => {
    const updatedArr = toDoList.filter(
      (todoItem) => toDoList.indexOf(todoItem) != toDoList.indexOf(todo)
    );
    settoDolist(updatedArr);
  };

  return (
    <div>
      <h1>To do list</h1>
      <form>
        <input type="text" value={userInput} onChange={handleChange} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <ul>
        {toDoList.length >= 1
          ? toDoList.map((todo, idx) => {
              return (
                <li key={idx}>
                  {todo}
                  <button
                    className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => {
                      e.preventDefault;
                      handleDelete(todo);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          : "Enter a review"}
      </ul>
    </div>
  );
}
