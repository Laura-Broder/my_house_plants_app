import React from "react";
import "./careOption.css";

const CareOption = ({ routineName, routineLabel, handelChange, itemObj }) => {
  const onChange = (event) => {
    if (itemObj[routineName])
      handelChange(event.target.name, event.target.value);
  };

  return (
    <div>
      <div className="care-container care-container__flex-row">
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              handelChange(e.target.name, e.target.checked);
            }}
            name={routineName}
            checked={itemObj[routineName]}
          />
          <label htmlFor={routineName}>{routineLabel}</label>
        </div>
        <select
          disabled={!itemObj[routineName]}
          name={`${routineName}Frequency`}
          id={`${routineName}Frequency`}
          onChange={onChange}
          value={itemObj[`${routineName}Frequency`]}>
          <option name="frequency" value="daily">
            Daily
          </option>
          <option name="frequency" value="monthly">
            Monthly
          </option>
          <option name="frequency" value="custom">
            Custom
          </option>
        </select>
        <input
          disabled={!itemObj[routineName]}
          onChange={onChange}
          type="date"
          value={itemObj[`${routineName}LastTime`]}
          name={`${routineName}LastTime`}></input>
      </div>
    </div>
  );
};

export default CareOption;
