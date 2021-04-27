import React, { useState, useContext } from "react";
// custom
import { DispatchContext, StateContext } from "./index";
import ItemBox from "./components/itemBox";
import AddBtn from "./components/addBtn";
import Dropdown from "./components/dropdown";
import SearchBox from "./components/searchBox";
// style
import "./styles/searchColumn.scss";

const searchColumn = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const [itemText, updateItemText] = useState("");
  const [errorColDD, setErrorColDD] = useState(false);
  const [errorItemBox, setErrorItemBox] = useState(false);

  const validateInput = (col) => {
    let error = 0;
    if (col === "") {
      setErrorColDD(true);
      error++; //Don't add if column is not selected
    }
    if (itemText === "") {
      setErrorItemBox(true);
      error++;
    }
    return error;
  };
  const addItem = () => {
    // Reset errors
    setErrorColDD(false);
    setErrorItemBox(false);

    // Determine the column to be modified
    let col = state.columnSelection;
    if (validateInput(col) > 0) return false;

    let newColAry = state.columns[col];
    let newAry = [...newColAry, itemText];

    // add new item
    dispatch({ type: "addItem", payload: { [col]: newAry } });

    // Clear add box
    updateItemText("");
  };

  return (
    <div id="searchColumn" className="flex-col">
      <ItemBox
        itemText={itemText}
        updateItemText={updateItemText}
        error={errorItemBox}
      />
      <Dropdown error={errorColDD} />
      <AddBtn addItem={addItem} />
      <SearchBox />
    </div>
  );
};

export default searchColumn;
