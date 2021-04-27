import React, { useState, useContext } from "react";

// custom
import { DispatchContext, StateContext } from "../index";
import InputBox from "../common/inputBox";

// style
import "../styles/searchBox.scss";

const SearchBox = () => {
  const dispatch = useContext(DispatchContext);
  const [itemText, updateItemText] = useState("");

  const handleSearch = (text) => {
    // Update keyword
    updateItemText(text);
    dispatch({
      type: "searchText",
      payload: text,
    });
  };

  return (
    <div className="search-box-container">
      <InputBox
        id={"searchBox"}
        value={itemText}
        onChange={handleSearch}
        placeholder="Search"
        label="Search an item"
      />
    </div>
  );
};

export default SearchBox;
