import React, { useState } from "react";
import { Input } from "../stories/Input";

const SearchForm = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onChange = (_, term) => {
    setSearchTerm(term);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className="flex-column">
      <label htmlFor="search">Search By Name:</label>
      <Input
        value={searchTerm}
        type="search"
        name="search"
        handelChange={onChange}
      />
    </form>
  );
};

export default SearchForm;
