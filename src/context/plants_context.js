import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/plants_reducer";
import { plants_url as url } from "../utils/constants";

import {
  GET_PLANTS_BEGIN,
  GET_PLANTS_SUCCESS,
  GET_PLANTS_ERROR,
} from "../actions";

const initialState = {
  plants_loading: false,
  plants_error: false,
  plants: [],
};

const PlantsContext = React.createContext();

export const PlantsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPlants = async (url) => {
    dispatch({ type: GET_PLANTS_BEGIN });
    try {
      const response = await axios.get(url);
      const plants = response.data;
      console.log(plants);
      dispatch({ type: GET_PLANTS_SUCCESS, payload: plants });
    } catch (error) {
      dispatch({ type: GET_PLANTS_ERROR });
    }
  };

  // Only necessaary if we don't use the loader, but the loader has a better performance
  useEffect(() => {
    fetchPlants(url);
  }, []);

  return (
    <PlantsContext.Provider value={{ ...state }}>
      {children}
    </PlantsContext.Provider>
  );
};

// make sure use
export const usePlantsContext = () => {
  return useContext(PlantsContext);
};
