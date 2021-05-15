const CREATE_CUSTOMER = "CREATE_CUSTOMER";

const initialState = {
  customersArray:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("customerArray")) || []
      : [],
};

export const createCustomer = (customerData) => {
  return {
    type: "CREATE_CUSTOMER",
    payload: customerData,
  };
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CUSTOMER:
      localStorage.setItem(
        "customerArray",
        JSON.stringify([...state.customersArray, action.payload])
      );
      return {
        ...state,
        customersArray: [...state.customersArray, action.payload],
      };
    default:
      return state;
  }
};
