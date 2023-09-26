import React from 'react';
import CountUp from "react-countup";

function Counter({ number, title, countSign }) {
  return (
    <>
      <CountUp duration={10} className="counter" end={number} /> {countSign}
      <h5>{title}</h5>
    </>
  )
}

export default Counter
