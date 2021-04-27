import React, { useReducer } from "react";
import ReactDOM from "react-dom";
// custom
import { reducer, initialState } from "./reducer/Reducer";
import Main from "./main";
// context
export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Main />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
