import React, { useState } from "react";
import { useEffect } from "react";
import Spinner from "../spinner/Spinner.component";
import GalleryItem from "./GalleryItem.component";
import PlantGallery from "./PlantGallery.component";
const UpdateData = require("../../functions/updateData").ManageData;

const Home = () => {
  const [spinnerShow, setSpinnerShow] = useState(true);
  const updateData = new UpdateData();
  const [list, setList] = useState([...updateData.getData()]);
  const [expendedItem, setExpendedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("i render");
    setSpinnerShow(false);
  }, []);
  const onSearchSubmit = (term) => {
    setSpinnerShow(true);
    setSearchTerm(term);
    const searchResults = updateData.searchByName(term);
    setList(searchResults);
    setSpinnerShow(false);
  };

  const renderExpendedItem = () => {
    return (
      <GalleryItem item={expendedItem} onClose={() => setExpendedItem(null)} />
    );
  };
  const onExpend = (itemId) => {
    const item = updateData.getItemById(itemId);
    setExpendedItem(item);
  };
  return (
    <div className=" container">
      {spinnerShow && <Spinner />}
      {expendedItem && renderExpendedItem()}
      <PlantGallery
        newList={list}
        onSearchSubmit={onSearchSubmit}
        onExpend={onExpend}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Home;
