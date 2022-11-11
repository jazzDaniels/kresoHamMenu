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
    <div className="bg-hero opacity-6 bg-slate-400 h-screen w-screen bg-no-repeat bg-center bg-scroll bg-auto flex flex-col justify-start items-center text-2xl">
      <h1 className="font-bold text-5xl	tracking-wide	decoration-white underline-offset-4 my-16">
        To do list
      </h1>
      <form>
        <input
          className="w-96 h-9"
          type="text"
          placeholder="Enter a To-do item"
          value={userInput}
          onChange={handleChange}
        />
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
                <li className="text-orange-300 text-3xl" key={idx}>
                  {todo}
                  <button
                    className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-xl"
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
          : ""}
      </ul>
    </div>
  );
}
