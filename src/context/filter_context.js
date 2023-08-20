import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { usePlantsContext } from "./plants_context";
import { LOAD_PLANTS } from "../actions";

const initialState = {
  filtered_plants: [],
  all_plants: [],
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { plants } = usePlantsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PLANTS, payload: plants });
    console.log(plants);
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
