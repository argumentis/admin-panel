import moment from "moment";

const CREATE_CUSTOMER = "CREATE_CUSTOMER";
const EDIT_CUSTOMER = "EDIT_CUSTOMER";
const DELETE_CUSTOMERS = "DELETE_CUSTOMERS";

const initialState = {
  customersArray:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("customerArray")) || []
      : [],
};

export const createCustomer = (customerId, customerData) => {
  return {
    type: "CREATE_CUSTOMER",
    id: customerId,
    payload: customerData,
  };
};

export const editCustomer = (customerId, customerData) => {
  return {
    type: "EDIT_CUSTOMER",
    id: customerId,
    payload: customerData,
  };
};

export const deleteCustomer = (removedCustomers) => {
  return {
    type: "DELETE_CUSTOMERS",
    payload: removedCustomers,
  };
};

export const customerReducer = (
  state = initialState,
  { payload, id, type }
) => {
  switch (type) {
    case CREATE_CUSTOMER:
      const newCustomer = {
        id: id,
        ...payload,
        createDate: moment().format("L"),
        lastSeen: moment().format("L"),
        latestPurchase: moment().format("LLLL"),
        orders: "0",
        totalSpend: "300,0 $",
      };
      localStorage.setItem(
        "customerArray",
        JSON.stringify([...state.customersArray, newCustomer])
      );
      return {
        ...state,
        customersArray: [...state.customersArray, newCustomer],
      };

    case EDIT_CUSTOMER:
      const changeCustomerArray = state.customersArray.map((item) => {
        if (item.id === id) {
          return { ...item, ...payload };
        }
        return item;
      });
      localStorage.setItem(
        "customerArray",
        JSON.stringify(changeCustomerArray)
      );
      return { ...state, customersArray: changeCustomerArray };

    case DELETE_CUSTOMERS:
      const filtredCustomersArray = state.customersArray.filter(
        (user) => !payload.includes(user.id)
      );

      localStorage.setItem(
        "customerArray",
        JSON.stringify(filtredCustomersArray)
      );

      return {
        ...state,
        customersArray: filtredCustomersArray,
      };

    default:
      return state;
  }
};
