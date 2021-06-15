export const CREATE_CUSTOMER = "CREATE_CUSTOMER";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";
export const DELETE_CUSTOMERS = "DELETE_CUSTOMERS";

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