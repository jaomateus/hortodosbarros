import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { LOAD_PLANTS } from "../actions";
import { usePlantsContext } from "./plants_context";

const initialState = {
  filtered_plants: [],
  all_plants: [],
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { plants } = usePlantsContext();
  console.log(plants);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PLANTS, payload: plants });
  }, [plants]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

//make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
