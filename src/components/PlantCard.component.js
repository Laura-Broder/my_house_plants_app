import React from "react";
import FullDataItem from "./FullDataItem.component";

const PlantCard = ({ item }) => {
  return (
    <div>
      <FullDataItem item={item} fullData={item.fullItemData} />
    </div>
  );
};

export default PlantCard;
