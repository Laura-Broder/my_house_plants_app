import React, { useEffect, useState } from "react";
import { Button } from "../stories/Button";
import { Input } from "../stories/Input";
import RoutineOption from "./RoutineOption.component";

const Form = ({ onSubmit, formHeader, item, editMode, onDiscard }) => {
  const [nameTerm, setNameTerm] = useState("");
  const [imgUrlTerm, setImgUrlTerm] = useState("");

  useEffect(() => {
    if (editMode) {
      setNameTerm(item.name);
      setImgUrlTerm(item.imgUrl);
    }
  }, []);

  const handleInputChange = (fieldName, fieldValue) => {
    fieldName === "plantName"
      ? setNameTerm(fieldValue)
      : setImgUrlTerm(fieldValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let itemUpdated = {};
    if (item) {
      itemUpdated = item;
    }
    itemUpdated.name = nameTerm;
    itemUpdated.imgUrl = imgUrlTerm;
    const newArray = onSubmit(itemUpdated);
    setNameTerm("");
    setImgUrlTerm("");
    return newArray;
  };
  const handleDiscard = () => {
    setNameTerm("");
    setImgUrlTerm("");
    onDiscard();
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
          name="plantName"
          value={nameTerm}
        />
        <div>
          <RoutineOption
            routineName="watering"
            routineLabel="Watering"
            handelChange={handleInputChange}
          />
        </div>
        <label htmlFor="plantImgUrl">Image URL:</label>
        <Input
          handelChange={handleInputChange}
          placeholder="Plant image url"
          name="plantImgUrl"
          value={imgUrlTerm}
        />
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
