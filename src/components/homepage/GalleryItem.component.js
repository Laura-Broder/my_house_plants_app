import React from "react";
import { Button } from "../../stories/Button";
import PlantCard from "../PlantCard.component";
import "./galleryItem.css";

const GalleryItem = ({ item, onClose }) => {
  return (
    <div className="expended-item expended-item--flex-column ">
      <PlantCard item={item} />
      <Button
        value={item.id}
        label="Close"
        onClick={(e) => {
          onClose(e.target.value);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        size="small"
      />
    </div>
  );
};

export default GalleryItem;
