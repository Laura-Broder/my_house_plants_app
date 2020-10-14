import React from "react";
import { Button } from "../../stories/Button";

const SearchResultsItem = ({ item, onClick, handleAdd }) => {
  return (
    <div
      key={item.id}
      className="searchDatabase__item searchDatabase--grid-item searchDatabase__item-flex-column">
      <h4 className="searchDatabase__item__header">{item.name}</h4>
      <img className="searchDatabase__img" src={item.imgUrl} alt={item.name} />
      <div className="btns--flex-column">
        <Button
          label="Expend"
          onClick={() => {
            onClick(item);
          }}
        />
        <Button
          label="Add to List"
          onClick={(e) => {
            handleAdd(item);
          }}
        />
      </div>
    </div>
  );
};

export default SearchResultsItem;
