const initialState = {
  columns: {
    column1: ["item", "item"],
    column2: ["additional item"],
  },
  count: 0,
  searchText: "",
  searchDictionary: {},
  columnSelection: "",
};

const removeItem = (array, removeIndex) => {
  return array.filter((item, index) => index !== removeIndex);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        columns: { ...state.columns, ...action.payload },
        count: state.count + 1,
      };
    case "removeItem":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.objKey]: removeItem(
            state.columns[action.objKey],
            action.payload
          ),
        },
      };
    case "columnSelection":
      return { ...state, columnSelection: action.payload };
    case "searchText":
      return { ...state, searchText: action.payload };
    default:
      throw new Error();
  }
};

export { reducer, initialState };
