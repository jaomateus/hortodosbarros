import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PLANTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PLANTS,
} from "../actions";
import { usePlantsContext } from "./plants_context";

const initialState = {
  filtered_plants: [],
  all_plants: [],
  grid_view: true,
  sort: "name-a",
  //  filters:{
  //   text:'',
  //   min_price: 0,
  //   max_price: 0,
  //   price: 0,
  //  }
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { plants } = usePlantsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PLANTS, payload: plants });
  }, [plants]);

  useEffect(() => {
    dispatch({ type: SORT_PLANTS });
  }, [state.sort]);

  // functions
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
