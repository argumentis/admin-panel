import { categoriesList } from "./constanst";

const EDIT_CATEGORY = "EDIT_CATEGORY";
const SELECT_CATEGORY = "SELECT_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";

const initialState = {
  selectedCategory: "0",
  categoriesArray:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("categoriesArray")) || categoriesList
      : [],
};

export const selectCategory = (categoryId) => {
  return {
    type: "SELECT_CATEGORY",
    id: categoryId,
  };
};

export const editCategory = (categoryId, categoryName) => {
  return {
    type: "EDIT_CATEGORY",
    id: categoryId,
    payload: categoryName,
  };
};

export const deleteCategory = (removedCategory) => {
  return {
    type: "DELETE_CATEGORY",
    payload: removedCategory,
  };
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, selectedCategory: action.id };

    case DELETE_CATEGORY:
      const filtredArray = state.categoriesArray.filter(
        (user) => user.id !== action.payload
      );
      localStorage.setItem("categoriesArray", JSON.stringify(filtredArray));

      return {
        ...state,
        categoriesArray: filtredArray,
      };

    case EDIT_CATEGORY:
      const changedArray = state.categoriesArray.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      localStorage.setItem("categoriesArray", JSON.stringify(changedArray));
      return { ...state, categoriesArray: changedArray };
    default:
      return state;
  }
};
