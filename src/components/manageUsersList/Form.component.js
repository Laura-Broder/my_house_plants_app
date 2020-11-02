import React, { useState } from "react";
import { Button } from "../../stories/Button";
import { Input } from "../../stories/Input";
import CareOption from "./CareOption.component";
import "./form.css";

const Form = ({ onSubmit, formHeader, item, editMode, onDiscard }) => {
  const initItem = item;
  const [itemObj, setItemObj] = useState({ ...item });

  const handleInputChange = (fieldName, fieldValue) => {
    const prevItemObj = itemObj;
    prevItemObj[fieldName] = fieldValue;
    setItemObj({ ...prevItemObj });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemObj);
    setItemObj(itemObj);
  };
  const handleDiscard = () => {
    setItemObj(initItem);
    onDiscard();
  };

  return (
    <div className="form--container ">
      <h2 className="form__header">{formHeader}</h2>
      <form className="form form--flex-column" onSubmit={handleSubmit}>
        <label htmlFor="plantName">Name:</label>
        <Input
          handelChange={handleInputChange}
          placeholder="The name of the plant"
          autoFocus
          name="name"
          value={itemObj.name}
        />
        <div className="form--flex-column">
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

        <div className="form--flex-column">
          {editMode ? (
            <Button
              backgroundColor="#ec6e4c"
              label="Save"
              type="submit"
              onClick={() => {}}
              primary
              size="large"
            />
          ) : (
            <Button
              backgroundColor="#ec6e4c"
              label="Add"
              type="submit"
              onClick={() => {}}
              primary
              size="large"
            />
          )}
          <Button
            backgroundColor="#ec6e4c"
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
