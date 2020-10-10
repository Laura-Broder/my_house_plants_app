import React, { useState } from "react";
import AddNewForm from "./AddNewForm.component";
import EditForm from "./EditForm.component";
import FullDataItem from "./FullDataItem.component";
import PlantsList from "./PlantsList.component";
const UpdateData = require("../functions/updateData").ManageData;
const ListItem = require("../functions/updateData").ListItem;

const ManageList = () => {
  const listItem = new ListItem();
  const updateData = new UpdateData();
  const [list, setList] = useState([...updateData.getData()]);
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState({});

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
    console.log(item);
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
  const onDeleteAll = () => {
    // add an alert of "ARE YOU SURE???"
    setList(updateData.clearList());
  };
  return (
    <div className="container flex-row">
      {editMode ? (
        <div>
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
