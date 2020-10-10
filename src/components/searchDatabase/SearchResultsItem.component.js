import React from "react";
import { Button } from "../../stories/Button";

const SearchResultsItem = ({ item, onClick, handleAdd }) => {
  return (
    <div key={item.id} className="grid-item">
      <h4>{item.name}</h4>
      <img src={item.imgUrl} alt={item.name} />
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
  );
};

export default SearchResultsItem;
