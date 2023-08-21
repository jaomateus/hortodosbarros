import {
  LOAD_PLANTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PLANTS,
  UPDATE_SORT,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PLANTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_plants: [...action.payload],
      filtered_plants: [...action.payload],
      filters: { ...state.filters },
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

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === SORT_PLANTS) {
    const { sort, filtered_plants } = state;
    let tempPlants = [...filtered_plants];
    if (sort === "price-lowest") {
      console.log(sort);
      tempPlants = tempPlants.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempPlants = tempPlants.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sort === "name-a") {
      tempPlants = filtered_plants.sort((a, b) => {
        return a.scientific_name.localeCompare(b.scientific_name);
      });
    }
    if (sort === "name-z") {
      tempPlants = tempPlants.sort((a, b) => {
        return b.scientific_name.localeCompare(a.scientific_name);
      });
    }

    return {
      ...state,
      filtered_plants: tempPlants,
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default filter_reducer;
