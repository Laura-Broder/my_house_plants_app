import React, { useState } from "react";
import AddNewForm from "./AddNewForm.component";
import EditForm from "./EditForm.component";
import FullDataItem from "../FullDataItem.component";
import PlantsList from "./PlantsList.component";
import Spinner from "../spinner/Spinner.component";
import { useEffect } from "react";
import "./manageList.css";
import {
  ManageData as UpdateData,
  ListItem,
} from "../../functions/updateData.js";

const ManageList = () => {
  const listItem = new ListItem();
  const updateData = new UpdateData();
  const [list, setList] = useState([...updateData.getData()]);
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [spinnerShow, setSpinnerShow] = useState(true);

  useEffect(() => {
    setSpinnerShow(false);
  }, [list]);
  const handleAddNew = (item) => {
    setSpinnerShow(true);
    const newList = updateData.addNew(item);
    setList(newList);
    setSpinnerShow(false);
  };
  const handleDelete = (itemId) => {
    setSpinnerShow(true);
    const newList = updateData.deleteItem(itemId);
    setList(newList);
    setSpinnerShow(false);
  };
  const handleEdit = (itemId) => {
    setSpinnerShow(true);
    const item = updateData.getItemById(itemId);
    setEditItem(item);
    setEditMode(true);
    setSpinnerShow(false);
  };
  const handleEditSave = (newItem) => {
    setSpinnerShow(true);
    const newList = updateData.updateItem(newItem);
    setList(newList);
    setEditMode(false);
    setEditItem({});
    setSpinnerShow(false);
  };
  const handleDiscard = () => {
    setSpinnerShow(true);
    setEditMode(false);
    setEditItem({});
    setSpinnerShow(false);
  };
  const handleSearchSubmit = (term) => {
    setSpinnerShow(true);
    const searchResults = updateData.searchByName(term);
    setList(searchResults);
    setSpinnerShow(false);
  };
  const onDeleteAll = () => {
    setSpinnerShow(true);
    // add an alert of "ARE YOU SURE???"
    setList(updateData.clearList());
    setEditMode(false);
    setSpinnerShow(false);
  };
  return (
    <div className="manageList-container manageList--flex-row">
      {spinnerShow && <Spinner />}
      {editMode ? (
        <div className="editForm-container">
          <EditForm
            item={editItem}
            onSubmit={handleEditSave}
            onDiscard={handleDiscard}
          />
          <FullDataItem item={editItem} fullData={editItem.fullItemData} />
        </div>
      ) : (
        <AddNewForm
          item={listItem}
          onSubmit={handleAddNew}
          onDiscard={handleDiscard}
        />
      )}
      <PlantsList
        newList={list}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSearchSubmit={handleSearchSubmit}
        onDeleteAll={onDeleteAll}
      />
    </div>
  );
};

export default ManageList;
