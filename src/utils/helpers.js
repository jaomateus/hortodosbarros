import axios from "axios";
import { productionUrl } from "./constants";

// axios custom instance
export const customFetch = axios.create({
  baseURL: productionUrl,
});

// format price
export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(number / 100);
  return newNumber;
};

// getUniqueValues
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ["all", ...new Set(unique)];
};
