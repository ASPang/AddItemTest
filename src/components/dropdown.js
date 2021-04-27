import React, { useContext } from "react";
// custom
import { DispatchContext, StateContext } from "../index";
import ErrorBox from "./errorbox";
// style
import "../styles/columnDropdown.scss";

const Dropdown = ({ error, props }) => {
  const dispatch = useContext(DispatchContext);

  // Dropdown option
  const list = [
    { value: "", text: "Choose column" },
    { value: "column1", text: "Column 1" },
    { value: "column2", text: "Column 2" },
  ];

  const changeColumn = (e) => {
    // Update dropdown selection
    dispatch({ type: "columnSelection", payload: e.target.value });
  };

  return (
    <>
      <label className="sr-only">Choose a column</label>
      <select onChange={changeColumn}>
        {list.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      {error && <ErrorBox>Please select a column</ErrorBox>}
    </>
  );
};

export default Dropdown;
