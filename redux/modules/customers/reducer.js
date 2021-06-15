import moment from "moment";
import { initialState } from './initialState'
import { CREATE_CUSTOMER, EDIT_CUSTOMER, DELETE_CUSTOMERS, } from './actionCreators'

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
