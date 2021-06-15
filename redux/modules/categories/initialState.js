import { categoriesList } from "./constanst";

export const initialState = {
  selectedCategory: "0",
  categoriesArray:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("categoriesArray")) || categoriesList
      : [],
};