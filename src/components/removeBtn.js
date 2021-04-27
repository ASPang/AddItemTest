import React, { useContext } from "react";

// custom
import { DispatchContext } from "../index";

// style
import "../styles/removeButton.scss";

const RemoveBtn = ({ col, index, ...props }) => {
  const dispatch = useContext(DispatchContext);

  const removeItem = () => {
    // Remove item from column
    dispatch({
      type: "removeItem",
      payload: index,
      objKey: col,
    });
  };

  return (
    <button className="button-remove" aria-label="remove" onClick={removeItem}>
      X
    </button>
  );
};

export default RemoveBtn;
