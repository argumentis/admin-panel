import { initialState } from './initialState'
import { CREATE_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, } from './actionCreators'

export const productsReducer = (
  state = initialState,
  { payload, type, id }
) => {
  switch (type) {
    case CREATE_PRODUCT:
      const newProduct = {
        id: id,
        ...payload,
      };
      localStorage.setItem(
        "productsArray",
        JSON.stringify([...state.productsArray, newProduct])
      );
      return {
        ...state,
        productsArray: [...state.productsArray, newProduct],
      };

    case EDIT_PRODUCT:
      const changeProductArray = state.productsArray.map((item) => {
        if (item.id === id) {
          return { ...item, ...payload };
        }
        return item;
      });
      localStorage.setItem("productsArray", JSON.stringify(changeProductArray));
      return { ...state, productsArray: changeProductArray };

    case DELETE_PRODUCT:
      const filtredProductArray = state.productsArray.filter(
        (user) => payload !== user.id
      );

      localStorage.setItem(
        "productsArray",
        JSON.stringify(filtredProductArray)
      );

      return {
        ...state,
        productsArray: filtredProductArray,
      };

    default:
      return state;
  }
};
