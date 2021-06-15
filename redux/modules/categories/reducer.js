import { initialState } from "./initialState";
import {
  EDIT_CATEGORY,
  SELECT_CATEGORY,
  DELETE_CATEGORY,
} from "./actionCreators";

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
