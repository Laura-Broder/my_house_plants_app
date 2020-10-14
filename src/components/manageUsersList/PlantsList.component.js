import React from "react";
import { Button } from "../../stories/Button";
import SearchForm from "../SearchForm.component";
import "./plantList.css";

const PlantsList = ({
  newList,
  onEdit,
  onDelete,
  onSearchSubmit,
  onDeleteAll,
}) => {
  const renderList = () => {
    if (newList.length === 0) {
      return <h4>Nothing to see here yet</h4>;
    }
    return newList.map((item, index) => {
      return (
        <div
          key={index}
          className="plantList--grid-item plantList--flex-column">
          <p>{item.name}</p>
          <img src={item.imgUrl} alt={item.name} />
          <div className="plantList--flex-column">
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
        </div>
      );
    });
  };

  return (
    <div className="plantList-container">
      <div className="plantList-header--flex-row">
        <h2 className="plantList-header">Your List:</h2>
        <Button
          backgroundColor="red"
          value="deleteAll"
          label="Delete All"
          onClick={(e) => {
            onDeleteAll(e.target.value);
          }}
          size="small"
          primary="false"
        />
      </div>
      <SearchForm onFormSubmit={onSearchSubmit} />
      <div className="planList--grid">{renderList()}</div>
    </div>
  );
};

export default PlantsList;
