import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-300 container my-5 mt-0">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1 className="text-2xl">
            Doniraj kune za <span className="text-slate-400">pituru</span>
          </h1>
          <h2 className="text-3xl text-purple-700">{count} kn</h2>
          <button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              setCount(count + 10);
            }}
          >
            +
          </button>
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              setCount(count - 10);
            }}
          >
            -
          </button>
          <button
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
