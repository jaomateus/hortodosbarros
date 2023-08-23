import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PLANTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PLANTS,
  UPDATE_FILTERS,
  FILTER_PLANTS,
  CLEAR_FILTERS,
  TOGGLE_FILTER_GROUP,
} from "../actions";
import { usePlantsContext } from "./plants_context";

const initialState = {
  filtered_plants: [],
  all_plants: [],
  grid_view: true,
  sort: "name-a",
  isOpenLayers: false,
  isOpenColors: false,
  isOpenPrice: false,
  isOpenFunctions: false,
  filters: {
    text: "",
    layer: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    flower_color: "all",
    n_fixer: false,
    bee_plant: false,
    nutrient_miner: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { plants } = usePlantsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PLANTS, payload: plants });
  }, [plants]);

  useEffect(() => {
    dispatch({ type: FILTER_PLANTS });
    dispatch({ type: SORT_PLANTS });
  }, [plants, state.sort, state.filters]);

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

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "layer") {
      value = e.target.textContent;
    }
    if (name === "flower_color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (
      name === "n_fixer" ||
      name === "bee_plant" ||
      name === "nutrient_miner"
    ) {
      value = e.target.checked;
    }

    dispatch({
      type: UPDATE_FILTERS,
      payload: { name, value },
    });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const toggleFilterGroup = (group) => {
    dispatch({ type: TOGGLE_FILTER_GROUP, payload: { group } });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
        toggleFilterGroup,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
