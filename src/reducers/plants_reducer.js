import {
  GET_PLANTS_BEGIN,
  GET_PLANTS_SUCCESS,
  GET_PLANTS_ERROR,
} from "../actions";

const plants_reducer = (state, action) => {
  if (action.type === GET_PLANTS_BEGIN) {
    return { ...state, plants_loading: true };
  }
  if (action.type === GET_PLANTS_SUCCESS) {
    const featured_plants = action.payload.filter(
      (plant) => plant.featured === true
    );
    return {
      ...state,
      plants_loading: false,
      plants: action.payload,
      featured_plants,
    };
  }
  if (action.type === GET_PLANTS_ERROR) {
    return { ...state, plants_loading: false, plants_error: true };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};

export default plants_reducer;
