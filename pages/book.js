import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1 className="text-center text-2xl uppercase text-center antialiased font-bold text-pink-900 p-5">
        Ugovori date sa Krešimirom - for free!
      </h1>
      <div className="ml-5 mb-20">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
