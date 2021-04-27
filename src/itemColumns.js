import React, { useContext } from "react";

// custom
import { StateContext } from "./index";
import RemoveBtn from "./components/removeBtn";
// style
import "./styles/itemColumns.scss";

const ItemColumns = ({ props }) => {
  const state = useContext(StateContext);
  const { columns, searchText } = state;

  return (
    <>
      {Object.keys(columns).map((key, index) => (
        <div key={index} className="item-column flex-col">
          <div className="item-column-header">
            <h3>column {index + 1}</h3>
          </div>
          {columns[key]
            .filter(
              (item) =>
                searchText === "" ||
                item.toLowerCase().match(searchText.toLowerCase())
            )
            .map((item, index) => (
              <div key={index} className="item-column-row">
                <span className="item-colunm-text">{item}</span>
                <RemoveBtn col={key} index={index} />
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default ItemColumns;
