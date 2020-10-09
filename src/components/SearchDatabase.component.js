import React, { useEffect, useState } from "react";
import trefleApi from "../apis/trefleApi";
import SearchForm from "./SearchForm.component";
import { Button } from "../stories/Button";
const PlantData = require("../functions/plantData").PlantData;

const SearchDatabase = () => {
  const initTerm = "rose";
  const [searchTerm, setSearchTerm] = useState(initTerm);
  const [databaseSearchResults, setDatabaseSearchResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const getPlantsData = async (term) => {
    const response = await trefleApi.get("/api/v1/plants/search", {
      params: { q: term },
    });
    setDatabaseSearchResults(response.data);
  };
  const changePage = async (e) => {
    const response = await trefleApi.get(
      databaseSearchResults.links[e.target.value],
    );
    setDatabaseSearchResults(response.data);
  };
  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    getPlantsData(term);
  };

  useEffect(() => {
    getPlantsData(searchTerm);
  }, []);

  useEffect(() => {
    const plantData = new PlantData(databaseSearchResults.data);
    setSearchResults(plantData.getData());
  }, [databaseSearchResults]);

  const renderSearchResults = () => {
    if (searchResults.length) {
      return searchResults.map((item) => {
        return (
          <div key={item.id} className="grid-item">
            <h4>{item.commonName}</h4>
            <img src={item.imgUrl} alt={item.commonName} />
          </div>
        );
      });
    }
  };
  const renderPrevButton = () => {
    if (searchResults.length && databaseSearchResults.links.prev) {
      return (
        <>
          <Button label="First Page" onClick={changePage} value="first" />
          <Button label="Prev Page" onClick={changePage} value="prev" />
        </>
      );
    }
  };
  const renderNextButton = () => {
    if (searchResults.length && databaseSearchResults.links.next) {
      return (
        <>
          <Button label="Next Page" onClick={changePage} value="next" />
          <Button label="Last Page" onClick={changePage} value="last" />
        </>
      );
    }
  };
  return (
    <div>
      <SearchForm onFormSubmit={handleSearchSubmit} initValue={initTerm} />
      {renderPrevButton()}
      <div className="grid">{renderSearchResults()}</div>
      {renderNextButton()}
    </div>
  );
};

export default SearchDatabase;
