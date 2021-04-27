import React, { useContext } from "react";

// custom
import { StateContext } from "./index";
import SearchColumn from "./searchColumn";
import ItemColumns from "./itemColumns";

// style
import "./styles/main.scss";

const Main = () => {
  const state = useContext(StateContext);

  return (
    <div>
      <h1>Marvelous!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        consectetur placerat magna, vel interdum tortor bibendum a. In vel
        vulputate libero.
      </p>
      <div className="add-item-header">
        <h2>Add an item</h2>
      </div>
      <div className="flex-container item-container">
        <SearchColumn />
        <ItemColumns />
      </div>
    </div>
  );
};

export default Main;
