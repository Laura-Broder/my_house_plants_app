import React from "react";
import { Button } from "../stories/Button";

const GalleryItem = ({ item, onClose }) => {
  return (
    <div className="container">
      <p>{item.name}</p>
      <img src={item.imgUrl} alt={item.name} />
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
