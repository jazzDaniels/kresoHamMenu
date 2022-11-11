import React from "react";
function handleInput() {
  let buttonValue = 6;
  console.log(buttonValue);
}
const Calculator = () => {
  return (
    <div className="flex justify-center items-center h-screen shadow-2xl">
      <div className="w-4/12 h-5/6 bg-slate-500 flex flex-col justify-start items-center shadow-2xl	shadow-gray-800 ">
        <div className="bg-amber-100 w-10/12 h-1/6 mt-6 border-orange-600	border-2"></div>
        <div className="w-10/12 h-4/6 bg-slate-300 mt-12 keypad p-3 border-orange-600">
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="1"
            value="1"
          >
            1
          </button>
          <button
            className="number bg-blue-100	"
            onClick={handleInput}
            name="2"
            value="2"
          >
            2
          </button>
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="3"
            value="3"
          >
            3
          </button>
          <button
            className="plus bg-gray-700 text-white"
            onClick={handleInput}
            name="+"
            value="+"
          >
            +
          </button>
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="4"
            value="4"
          >
            4
          </button>
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="5"
            value="5"
          >
            5
          </button>
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="6"
            value="6"
          >
            6
          </button>
          <button
            className="number bg-gray-700 text-white"
            onClick={handleInput}
            name="-"
            value="-"
          >
            -
          </button>
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="7"
            value="7"
          >
            7
          </button>
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="8"
            value="8"
          >
            8
          </button>
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="9"
            value="9"
          >
            9
          </button>
          <button
            className="number bg-gray-700 text-white"
            onClick={handleInput}
            name="*"
            value="*"
          >
            *
          </button>
          <button
            className="clearButton bg-red-700"
            onClick={handleInput}
            name="C"
            value="C"
          >
            C
          </button>
          <button
            className="number bg-blue-100"
            onClick={handleInput}
            name="0"
            value="0"
          >
            0
          </button>
          <button
            className="number bg-gray-700 text-white"
            onClick={handleInput}
            name="="
            value="="
          >
            =
          </button>
          <button
            className="number bg-gray-700 text-white"
            onClick={handleInput}
            name="/"
            value="/"
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
