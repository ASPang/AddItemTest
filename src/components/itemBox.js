import React, { useState, useContext } from "react";
// custom
import InputBox from "../common/inputBox";
import ErrorBox from "./errorbox";

const ItemBox = ({itemText, updateItemText, error, ...props}) => (
    <>
      <InputBox
        value={itemText}
        onChange={updateItemText}
        placeholder="Enter item"
        label="Enter an item"
        cssStyle="sr-only"
      />
      {error && <ErrorBox>Required field</ErrorBox>}
    </>
  );

export default ItemBox;
