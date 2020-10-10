import React from "react";
import { Button } from "../stories/Button";

const ExpendedItem = ({ item, fullData, handleClose, handleAdd }) => {
  const renderValue = (val) => {
    if (Array.isArray(val)) return null;
    return <p className="long-row-wrap">{val}</p>;
  };

  const renderExpendedItem = () => {
    if (fullData) {
      const fullDataArray = Object.entries(fullData);
      return (
        <div className="container">
          <h3>{item.name}</h3>
          <img src={item.imgUrl} alt={item.name} />
          {fullDataArray.map(([title, val]) => {
            if (typeof val === "object") return null;

            return (
              <div key={title}>
                <h4>{title}</h4>
                {renderValue(val)}
              </div>
            );
          })}
          <Button label="Close" onClick={handleClose} />
          <Button
            label="Add to List"
            onClick={(e) => {
              handleAdd(item);
            }}
          />
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };
  return renderExpendedItem();
};

export default ExpendedItem;
