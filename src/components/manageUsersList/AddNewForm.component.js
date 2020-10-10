import React from "react";
import Form from "./Form.component";

const AddNewForm = ({ item, onSubmit, onDiscard }) => {
  return (
    <div className="container flex-column">
      <Form
        item={item}
        onSubmit={onSubmit}
        formHeader="Add a Plant to your list"
        editMode={false}
        onDiscard={onDiscard}
      />
    </div>
  );
};

export default AddNewForm;
