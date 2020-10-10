import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner--container">
      <ul className="spinner">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Spinner;
