export const initialState = {
    customersArray:
      typeof localStorage !== "undefined"
        ? JSON.parse(localStorage.getItem("customerArray")) || []
        : [],
  };