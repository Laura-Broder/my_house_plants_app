import React from "react";

const RoutineOption = ({ routineName, routineLabel, handelChange }) => {
  const onChange = (event) => {
    handelChange(event.target.name, event.target.value);
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          onChange={onChange}
          name={routineName}
          value={routineName}
        />
        <label htmlFor={routineName}>{routineLabel}</label>
        <select name="frequency" id="frequency">
          <option value="daily" onChange={onChange}>
            Daily
          </option>
          <option value="monthly" onChange={onChange}>
            Monthly
          </option>
          <option value="custom" onChange={onChange}>
            Custom
          </option>
        </select>
        <input
          onChange={onChange}
          type="date"
          id="start"
          name="trip-start"
          value="2020-09-01"></input>
      </div>
    </div>
  );
};

export default RoutineOption;
