import React from "react";

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
      <h3>{item.name}</h3>
      <img src={item.imgUrl} alt={item.name} />
      {renderCareRoutine(item)}
    </div>
  );
};

export default PlantCard;
