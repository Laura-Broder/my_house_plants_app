import React from "react";
import { Button } from "../stories/Button";
import SearchForm from "./SearchForm.component";

const PlantsList = ({ newList, onEdit, onDelete, onSearchSubmit }) => {
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
            label="Edit"
            onClick={(e) => {
              onEdit(e.target.value);
            }}
            size="small"
          />
          <Button
            value={item.id}
            label="Delete"
            onClick={(e) => {
              onDelete(e.target.value);
            }}
            size="small"
          />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h2 className="container-header">Your List:</h2>
      <SearchForm onFormSubmit={onSearchSubmit} />
      <div className="container grid">{renderList()}</div>
    </div>
  );
};

export default PlantsList;
