import React from "react";
import { Button } from "../../stories/Button";
import PlantCard from "../PlantCard.component";

const GalleryItem = ({ item, onClose }) => {
  return (
    <div className="container">
      <PlantCard item={item} />
      <Button
        value={item.id}
        label="Close"
        onClick={(e) => {
          onClose(e.target.value);
        }}
        size="small"
      />
    </div>
  );
};

export default GalleryItem;
