const CREATE_PRODUCT = "CREATE_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const initialState = {
  productsArray:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("productsArray")) || []
      : [],
};

export const createProduct = (productId, productData) => {
  return {
    type: "CREATE_PRODUCT",
    id: productId,
    payload: productData,
  };
};

export const editProduct = (productId, productData) => {
  return {
    type: "EDIT_PRODUCT",
    id: productId,
    payload: productData,
  };
};

export const deleteProduct = (removedProduct) => {
  return {
    type: "DELETE_PRODUCT",
    payload: removedProduct,
  };
};

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
