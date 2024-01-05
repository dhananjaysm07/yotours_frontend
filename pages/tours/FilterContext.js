import { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducer";
import { initialState } from "./InitialValue";
const FilterContext = createContext();

// Create a provider component
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to consume the context
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
