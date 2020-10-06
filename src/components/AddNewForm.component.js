import React from "react";
import Form from "./Form.component";

const AddNewForm = ({ onSubmit, onDiscard }) => {
  return (
    <div className="container flex-column">
      <Form
        onSubmit={onSubmit}
        formHeader="Add a Plant to your list"
        editMode={false}
        onDiscard={onDiscard}
      />
    </div>
  );
};

export default AddNewForm;
