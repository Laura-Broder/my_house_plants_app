import React, { useState } from "react";
import GalleryItem from "./GalleryItem.component";
import PlantGallery from "./PlantGallery.component";
const UpdateData = require("../functions/updateData").ManageData;

const Home = () => {
  const updateData = new UpdateData();
  const [list, setList] = useState([...updateData.getData()]);
  const [expendedItem, setExpendedItem] = useState({});

  const onSearchSubmit = (term) => {
    const searchResults = updateData.searchByName(term);
    setList(searchResults);
  };
  const renderExpendedItem = () => {
    return (
      <GalleryItem item={expendedItem} onClose={() => setExpendedItem({})} />
    );
  };
  const onExpend = (itemId) => {
    const item = updateData.getItemById(itemId);
    setExpendedItem(item);
  };
  return (
    <div className=" container">
      {expendedItem.id ? renderExpendedItem() : null}
      <PlantGallery
        newList={list}
        onSearchSubmit={onSearchSubmit}
        onExpend={onExpend}
      />
    </div>
  );
};

export default Home;
