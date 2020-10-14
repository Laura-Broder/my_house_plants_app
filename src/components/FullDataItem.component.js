import React from "react";
import "./fullDataItem.css";

const FullDataItem = ({ item, fullData }) => {
  const renderValue = (val) => {
    if (Array.isArray(val)) return null;
    return <p className="long-row-wrap">{val}</p>;
  };

  const renderItem = () => {
    if (fullData) {
      const fullDataArray = Object.entries(fullData);

      return (
        <div className="fullDataItem container fullDataItem--flex-row">
          <div className="fullDataItem__header fullDataItem__header--flex-column">
            <h3>{item.name}</h3>
            <img src={item.imgUrl} alt={item.name} />
          </div>

          <div className="fullDataItem__header--flex-column">
            <div>
              <h3>Plant Details</h3>

              {fullDataArray.map(([title, val]) => {
                if (typeof val === "object") return null;
                if (title === "id") return null;
                if (title === "imgUrl") return null;
                if (val === "no data") return null;
                return (
                  <div key={title}>
                    <h4>{title}:</h4>
                    {renderValue(val)}
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="">
              <h3>Care Routine</h3>
              {renderCareRoutine(item)}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };
  const renderCareRoutine = () => {
    const careRoutineArray = [];
    if (item.watering) {
      careRoutineArray.push(
        <div key={`${item.id}watering`}>
          <h4>Watering Frequency:</h4>
          <p>{item.wateringFrequency}</p>
          <h4>Last Time Watered:</h4>
          <p>{item.wateringLastTime}</p>
        </div>,
      );
    }
    if (item.fertilizing) {
      careRoutineArray.push(
        <div key={`${item.id}fertilizing`}>
          <h4>Fertilizing Frequency:</h4>
          <p>{item.fertilizingFrequency}</p>
          <h4>Last Time fertilized:</h4>
          <p>{item.fertilizingLastTime}</p>
        </div>,
      );
    }
    if (item.trimming) {
      careRoutineArray.push(
        <div key={`${item.id}trimming`}>
          <h4>Trimming Frequency:</h4>
          <p>{item.trimmingFrequency}</p>
          <h4> Last Time Trimmed:</h4>
          <p>{item.trimmingLastTime}</p>
        </div>,
      );
    }
    return careRoutineArray.length ? careRoutineArray : "No Data";
  };
  return renderItem();
};

export default FullDataItem;
