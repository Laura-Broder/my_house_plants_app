import React from "react";
import Form from "./Form.component";

const EditForm = ({ item, onSubmit, onDiscard }) => {
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        formHeader="Edit"
        item={item}
        editMode={true}
        onDiscard={onDiscard}
      />
    </div>
  );
};

export default EditForm;
