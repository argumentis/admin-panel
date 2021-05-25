import { categoriesList } from "./constanst";

const EDIT_CATEGORY = "EDIT_CATEGORY";

const initialState = {
  categoriesArray:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("categoriesArray")) || categoriesList
      : [],
};

export const editCustomer = (customerId, customerData) => {
  return {
    type: "EDIT_CATEGORY",
    id: customerId,
    payload: customerData,
  };
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CATEGORY:
      localStorage.setItem("categoriesArray", JSON.stringify("lol"));
      return { ...state };
    default:
      return state;
  }
};
