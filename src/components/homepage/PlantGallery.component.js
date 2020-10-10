import React from "react";
import { Button } from "../../stories/Button";
import SearchForm from "../SearchForm.component";

const PlantGallery = ({ newList, onExpend, onSearchSubmit, searchTerm }) => {
  const renderList = () => {
    if (newList.length === 0) {
      return <h4>Nothing to see here yet</h4>;
    }
    return newList.map((item, index) => {
      return (
        <div key={index} className="container grid-item">
          <p>{item.name}</p>
          <img src={item.imgUrl} alt={item.name} />
          <Button
            value={item.id}
            label="Expend"
            onClick={(e) => {
              onExpend(e.target.value);
            }}
            size="small"
          />
        </div>
      );
    });
  };

  return (
    <div className="container ">
      <h2 className="container-header">Your List:</h2>
      <SearchForm onFormSubmit={onSearchSubmit} initValue={searchTerm} />
      <div className="container grid">{renderList()}</div>
    </div>
  );
};

export default PlantGallery;
