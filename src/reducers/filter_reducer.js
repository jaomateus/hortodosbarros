import {
  LOAD_PLANTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PLANTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PLANTS,
  CLEAR_FILTERS,
  TOGGLE_FILTER_GROUP,
} from "../actions";

import { flower_colors } from "../utils/constants";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PLANTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_plants: [...action.payload],
      filtered_plants: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
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

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PLANTS) {
    const { all_plants } = state;

    const {
      text,
      layer,
      price,
      flower_color,
      n_fixer,
      bee_plant,
      nutrient_miner,
    } = state.filters;

    let tempPlants = [...all_plants];

    // filtering
    // search
    if (text) {
      tempPlants = tempPlants.filter((plant) => {
        return plant.scientific_name.toLowerCase().startsWith(text);
      });
    }
    // categories
    if (layer !== "all") {
      tempPlants = tempPlants.filter((plant) => plant.layer === layer);
    }
    // colors
    if (flower_color !== "all") {
      let color = Object.keys(flower_colors).find(
        (key) => flower_colors[key] === flower_color
      );

      tempPlants = tempPlants.filter((plant) => plant.flower_color === color);
    }
    // price
    tempPlants = tempPlants.filter((plant) => plant.price <= price);
    // functions
    // n fixer
    if (n_fixer) {
      tempPlants = tempPlants.filter((plant) => plant.n_fixer === true);
    }
    // bee_plant
    if (bee_plant) {
      tempPlants = tempPlants.filter((plant) => plant.bee_plant === true);
    }
    // nutrient_miner
    if (nutrient_miner) {
      tempPlants = tempPlants.filter((plant) => plant.nutrient_miner === true);
    }

    return {
      ...state,
      filtered_plants: tempPlants,
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        layer: "all",
        price: state.filters.max_price,
        flower_color: "all",
        n_fixer: false,
        bee_plant: false,
        nutrient_miner: false,
      },
    };
  }

  if (action.type === TOGGLE_FILTER_GROUP) {
    const { group } = action.payload;
    return {
      ...state,
      [group]: !state[group],
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default filter_reducer;
