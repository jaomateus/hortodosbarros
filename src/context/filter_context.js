import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { LOAD_PLANTS, SET_GRIDVIEW, SET_LISTVIEW } from "../actions";
import { usePlantsContext } from "./plants_context";

const initialState = {
  filtered_plants: [],
  all_plants: [],
  grid_view: true,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { plants } = usePlantsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PLANTS, payload: plants });
  }, [plants]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

//make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
