import React from "react";
import FullDataItem from "./FullDataItem.component";

const PlantCard = ({ item }) => {
  const renderCareRoutine = () => {
    const careRoutineArray = [];
    if (item.watering) {
      careRoutineArray.push(
        <div key={`${item.id}watering`}>
          <p>
            Watering Frequency:
            {item.wateringFrequency}
          </p>
          <p>
            Last Time Watered:
            {item.wateringLastTime}
          </p>
        </div>,
      );
    }
    if (item.fertilizing) {
      careRoutineArray.push(
        <div key={`${item.id}fertilizing`}>
          <p>
            Fertilizing Frequency:
            {item.fertilizingFrequency}
          </p>
          <p>
            Last Time fertilized:
            {item.fertilizingLastTime}
          </p>
        </div>,
      );
    }
    if (item.trimming) {
      careRoutineArray.push(
        <div key={`${item.id}trimming`}>
          <p>
            Trimming Frequency:
            {item.trimmingFrequency}
          </p>
          <p>
            Last Time Trimmed:
            {item.trimmingLastTime}
          </p>
        </div>,
      );
    }
    return careRoutineArray;
  };

  return (
    <div>
      <FullDataItem item={item} fullData={item.fullItemData} />
      {renderCareRoutine(item)}
    </div>
  );
};

export default PlantCard;
