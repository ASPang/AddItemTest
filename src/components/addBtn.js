import React from "react";
import "../styles/addBtn.scss";

const AddBtn = ({ addItem, ...props }) => (
  <button className="button-add" onClick={addItem}>
    Add item
  </button>
);

export default AddBtn;
