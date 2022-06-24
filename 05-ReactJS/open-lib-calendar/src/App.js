import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <h1 className="text-center">React Calendar with Range</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} maxDetail="year" />
      </div>
    </div>
  );
}

export default App;
