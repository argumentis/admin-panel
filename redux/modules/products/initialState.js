export const initialState = {
    productsArray:
      typeof localStorage !== "undefined"
        ? JSON.parse(localStorage.getItem("productsArray")) || []
        : [],
  };