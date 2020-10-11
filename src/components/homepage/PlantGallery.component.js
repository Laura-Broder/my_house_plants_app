import React from "react";
import { Button } from "../../stories/Button";
import SearchForm from "../SearchForm.component";
import "./plantGallery.css";

const PlantGallery = ({ newList, onExpend, onSearchSubmit, searchTerm }) => {
  const renderList = () => {
    if (newList.length === 0) {
      return <h2>Nothing to see here yet</h2>;
    }
    return newList.map((item, index) => {
      return (
        <div
          key={index}
          className="gallery__card card--grid-item card-flex-column">
          <p className="card__header">{item.name}</p>
          <img className="card__img" src={item.imgUrl} alt={item.name} />
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
    <div className="home">
      <h2 className="home__header">Your List:</h2>
      <SearchForm onFormSubmit={onSearchSubmit} initValue={searchTerm} />
      <div className="gallery gallery--grid">{renderList()}</div>
    </div>
  );
};

export default PlantGallery;
