const filters = {
  name: "",
}

export const filtersReducer = (state = filters, action) => {
  console.log("Action", action);
  console.log("State", state);
  switch (action.type) {
    case "filters/filterContacts":
      return {
        ...state,
        name: action.payload,
      };
      
    default:
      return state;
  }
};

export const filterContactsByName = (name) => {
  return {
    type: "filters/filterContacts",
    payload: name,
  };
};
