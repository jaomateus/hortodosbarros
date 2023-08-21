import { LOAD_PLANTS, SET_GRIDVIEW, SET_LISTVIEW } from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PLANTS) {
    return {
      ...state,
      all_plants: [...action.payload],
      filtered_plants: [...action.payload],
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }

  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default filter_reducer;
