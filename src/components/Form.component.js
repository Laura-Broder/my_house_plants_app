import React, { useState } from "react";
import { Button } from "../stories/Button";
import { Input } from "../stories/Input";
import CareOption from "./CareOption.component";

const Form = ({ onSubmit, formHeader, item, editMode, onDiscard }) => {
  const initItem = item;
  const [itemObj, setItemObj] = useState(initItem);

  const handleInputChange = (fieldName, fieldValue) => {
    const prevItemObj = itemObj;
    prevItemObj[fieldName] = fieldValue;
    setItemObj({ ...prevItemObj });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemObj);
    setItemObj(initItem);
  };
  const handleDiscard = () => {
    setItemObj(initItem);
    onDiscard();
  };
  const handleFileLoad = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      handleInputChange("imgUrl", fileUrl);
    }
  };
  return (
    <div className="container flex-column">
      <h2 className="container-header">{formHeader}</h2>
      <form className="flex-column" onSubmit={handleSubmit}>
        <label htmlFor="plantName">Name:</label>
        <Input
          handelChange={handleInputChange}
          placeholder="The name of the plant"
          autoFocus
          name="name"
          value={itemObj.name}
        />
        <div>
          <CareOption
            routineName="watering"
            routineLabel="Watering"
            handelChange={handleInputChange}
            itemObj={itemObj}
          />
          <CareOption
            routineName="fertilizing"
            routineLabel="Fertilizing"
            handelChange={handleInputChange}
            itemObj={itemObj}
          />
          <CareOption
            routineName="trimming"
            routineLabel="Trimming"
            handelChange={handleInputChange}
            itemObj={itemObj}
          />
        </div>
        <label htmlFor="plantImgUrl">Image URL:</label>
        <Input
          handelChange={handleInputChange}
          placeholder="Plant image url"
          name="imgUrl"
          value={itemObj.imgUrl}
        />
        <input
          type="file"
          accept="image/*"
          name="image"
          id="imageFile"
          onChange={handleFileLoad}></input>
        <div className="flex-row">
          {editMode ? (
            <Button
              backgroundColor={null}
              label="Save"
              type="submit"
              onClick={() => {}}
              primary
              size="large"
            />
          ) : (
            <Button
              backgroundColor={null}
              label="Add"
              type="submit"
              onClick={() => {}}
              primary
              size="large"
            />
          )}
          <Button
            backgroundColor={null}
            label="Discard"
            onClick={handleDiscard}
            primary
            size="large"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
