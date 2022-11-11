import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="bg-hero bg-slate-400 h-screen w-screen bg-no-repeat bg-center bg-scroll bg-auto -mb-12">
      <div className="mt-10">
        <h1 className="text-center text-1xl uppercase text-center antialiased font-bold text-pink-900 mt-0">
          Ugovori date sa Krešimirom - for free!
        </h1>
      </div>
      <div className="flex flex-row justify-center mt-20">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
