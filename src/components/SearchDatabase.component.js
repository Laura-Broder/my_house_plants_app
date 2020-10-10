import React, { useEffect, useState } from "react";
import trefleApi from "../apis/trefleApi";
import SearchForm from "./SearchForm.component";
import { Button } from "../stories/Button";
import SearchResultsItem from "./SearchResultsItem.component";
import ExpendedItem from "./ExpendedItem.component";
const PlantDatabase = require("../functions/plantData").PlantDatabase;
const PlantFullItem = require("../functions/plantData").FullItem;
const roseResults = require("../functions/roseApiSearchResults").roseResults;
const UpdateData = require("../functions/updateData").ManageData;

const SearchDatabase = () => {
  const userList = new UpdateData();
  const [list, setList] = useState([...userList.getData()]);
  const managePlantDatabase = new PlantDatabase();
  const initTerm = "rose";
  const [searchTerm, setSearchTerm] = useState(initTerm);
  const [databaseSearchResults, setDatabaseSearchResults] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const [expendedItem, setExpendedItem] = useState(null);
  const [itemSearchResult, setItemSearchResult] = useState(null);
  const [selectedItemFullData, setSelectedItemFullData] = useState(null);
  const [addToListItem, setAddToListItem] = useState(null);
  // -----------------------------------
  // fetch from database
  // -----------------------------------
  // display rose search results (default search term) on page load
  useEffect(() => {
    searchDatabaseByTerm(searchTerm);
  }, []);
  // update the displayed search results every time the they change
  useEffect(() => {
    if (databaseSearchResults) {
      managePlantDatabase.setNewData(databaseSearchResults.data);
      setSearchResults(managePlantDatabase.getData());
      setLastPage(Math.ceil(databaseSearchResults.meta.total / 20));
    }
  }, [databaseSearchResults]);
  // create a full data object of plant
  useEffect(() => {
    if (itemSearchResult) {
      const newItemSearch = new PlantFullItem(itemSearchResult);
      setSelectedItemFullData(newItemSearch);
    }
  }, [itemSearchResult]);

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    searchDatabaseByTerm(term);
  };
  const searchDatabaseByTerm = async (term) => {
    // const response = await trefleApi.get("/api/v1/plants/search", {
    //   params: { q: term },
    // });
    // setDatabaseSearchResults(response.data);
    setDatabaseSearchResults(roseResults);
  };
  const getItemDatabase = async (fullItemData) => {
    const response = await trefleApi.get(fullItemData.links.self);
    setItemSearchResult(response.data.data);
  };
  const changePage = async (e) => {
    switch (e.target.value) {
      case "next":
        setCurrentPage(parseInt(currentPage) + 1);
        break;
      case "prev":
        setCurrentPage(parseInt(currentPage) - 1);
        break;
      case "first":
        setCurrentPage(1);
        break;
      case "last":
        setCurrentPage(lastPage);
        break;
      default:
        break;
    }
    const response = await trefleApi.get(
      databaseSearchResults.links[e.target.value],
    );
    setDatabaseSearchResults(response.data);
  };
  const jumpToPage = async (e) => {
    setCurrentPage(e.target.value);
    const response = await trefleApi.get("/api/v1/plants/search", {
      params: {
        q: searchTerm,
        page: e.target.value,
      },
    });
    setDatabaseSearchResults(response.data);
  };

  // -----------------------------------
  // add new plant from database to users list
  // -----------------------------------
  const addNew = (addToListItem, selectedItemFullData) => {
    const newItem = addToListItem;
    newItem.fullItemData = selectedItemFullData;
    const newList = userList.addNew(newItem);
    setList(newList);
    setAddToListItem(null);
    setSelectedItemFullData(null);
  };
  useEffect(() => {
    if (addToListItem && selectedItemFullData) {
      addNew(addToListItem, selectedItemFullData);
    }
  }, [addToListItem, selectedItemFullData]);
  // -----------------------------------
  // render methods
  // -----------------------------------
  const renderExpendedItem = (item) => {
    if (item) {
      return (
        <div>
          <ExpendedItem
            fullData={selectedItemFullData}
            item={item}
            handleClose={() => {
              setExpendedItem(null);
            }}
            handleAdd={(item) => {
              getItemDatabase(item.fullItemData);
              setAddToListItem(item);
            }}
          />
        </div>
      );
    }
  };
  const renderSearchResults = () => {
    if (searchResults.length) {
      return searchResults.map((item) => {
        return (
          <SearchResultsItem
            key={item.id}
            item={item}
            onClick={(item) => {
              setExpendedItem(item);
              getItemDatabase(item.fullItemData);
            }}
            handleAdd={(item) => {
              getItemDatabase(item.fullItemData);
              setAddToListItem(item);
            }}
          />
        );
      });
    }
  };
  const renderJumpToPage = () => {
    if (searchResults.length) {
      let pages = [];
      for (let i = 1; i < lastPage + 1; i++) {
        pages.push(
          <option key={i} name="jumpToPage" value={i}>
            Page {i}
          </option>,
        );
      }
      return (
        <>
          <p> Showing {searchResults.length} Results</p>
          <select name="jumpToPage" onChange={jumpToPage} value={currentPage}>
            {pages}
          </select>
          <span> of {lastPage} Pages </span>
        </>
      );
    }
  };
  const renderPrevButton = () => {
    if (searchResults.length && databaseSearchResults.links.prev) {
      return (
        <div>
          <Button label="First Page" onClick={changePage} value="first" />
          <Button label="Prev Page" onClick={changePage} value="prev" />
        </div>
      );
    }
  };
  const renderNextButton = () => {
    if (searchResults.length && databaseSearchResults.links.next) {
      return (
        <div>
          <Button label="Next Page" onClick={changePage} value="next" />
          <Button label="Last Page" onClick={changePage} value="last" />
        </div>
      );
    }
  };

  return (
    <div>
      <SearchForm onFormSubmit={handleSearchSubmit} initValue={initTerm} />
      {renderExpendedItem(expendedItem)}
      {renderPrevButton()}
      {renderJumpToPage()}
      <div className="grid">{renderSearchResults()}</div>
      {renderNextButton()}
    </div>
  );
};

export default SearchDatabase;
