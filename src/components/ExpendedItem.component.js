import React from "react";
import { Button } from "../stories/Button";
import FullDataItem from "./FullDataItem.component";
import "./expendedItem.css";

const ExpendedItem = ({ item, fullData, handleClose, handleAdd }) => {
  const renderExpendedItem = () => {
    if (fullData) {
      return (
        <div className="expendedSearch-item expendedSearch-item--flex-column ">
          <FullDataItem item={item} fullData={fullData} />
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
