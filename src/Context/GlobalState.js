import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = [];

const reducer = (prevState, action) => {
  if (action.type === "addTodo") {
    return [
      ...prevState,
      { todo: action.value, id: Date.now(), complated: action.complated },
    ];
  } else if (action.type === "deleteTodo") {
    let newList = prevState.filter((item) => item.id !== action.id);
    return (prevState = newList);
  } else if (action.type === "updateTodo") {
    return prevState.map((item) =>
      item.id === action.id ? { ...item, todo: action.value } : item
    );
  } else if (action.type === "complatedTodo") {
    if (
      prevState.filter((item) => item.id === action.id)[0].complated ===
      "complated"
    ) {
      return prevState.map((item) =>
        item.id === action.id ? { ...item, complated: "" } : item
      );
    } else {
      return prevState.map((item) =>
        item.id === action.id ? { ...item, complated: action.complated } : item
      );
    }
  }
};
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
