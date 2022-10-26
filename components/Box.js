import React from "react";

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";
  return (
    <div className="tipka bg-white border-none rounded shadow-2xl w-20 h-20 text-center text-5xl font-sans font-bold leading-normal m-2">
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Box;
