const initialCustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export const customerReducer = (state = initialCustomerState, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
};

export const updateName = (name) => {
  return { type: "customer/updateName", payload: name };
};
