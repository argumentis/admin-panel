export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

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