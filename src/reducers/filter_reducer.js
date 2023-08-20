import { LOAD_PLANTS } from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PLANTS) {
    return {
      ...state,
      all_plants: [...action.payload],
      filter_plants: [...action.payload],
    };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};

export default filter_reducer;
