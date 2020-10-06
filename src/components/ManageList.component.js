import React, { useState, useEffect } from "react";
import AddNewForm from "./AddNewForm.component";
import EditForm from "./EditForm.component";
import PlantsList from "./PlantsList.component";
const UpdateData = require("../functions/updateData").ManageData;

const ManageList = () => {
  const updateData = new UpdateData();
  const [list, setList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    const newList = updateData.getData();
    setList(newList);
  }, []);

  const handleAddNew = (item) => {
    const newList = updateData.addNew(item);
    setList(newList);
  };
  const handleDelete = (itemId) => {
    const newList = updateData.deleteItem(itemId);
    setList(newList);
  };
  const handleEdit = (itemId) => {
    const item = updateData.getItemById(itemId);
    setEditItem(item);
    setEditMode(true);
  };
  const handleEditSave = (newItem) => {
    const newList = updateData.updateItem(newItem);
    setList(newList);
    setEditMode(false);
    setEditItem({});
  };
  const handleDiscard = () => {
    setEditMode(false);
  };
  const handleSearchSubmit = (term) => {
    const searchResults = updateData.searchByName(term);
    setList(searchResults);
  };
  return (
    <div className="container flex-row">
      {editMode ? (
        <EditForm
          item={editItem}
          onSubmit={handleEditSave}
          onDiscard={handleDiscard}
        />
      ) : (
        <AddNewForm onSubmit={handleAddNew} onDiscard={handleDiscard} />
      )}
      <PlantsList
        newList={list}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
};

export default ManageList;
