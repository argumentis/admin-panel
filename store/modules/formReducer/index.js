const LOAD = "LOAD";

export const load = (customerData) => {
  return {
    type: "LOAD",
    payload: customerData,
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
