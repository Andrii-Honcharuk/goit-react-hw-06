//store.js

// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
// import { createStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts:
    [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26"},
    { id: "id-5", name: "Ann", number: "227-91-36" },
],
  filters: {
    name: "",
  }
}


export const addContact = (newContact) => {
  return {
    type: 'contacts/addContact',
    payload: newContact,
  };
}

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};
export const filterContactsByName = (name) => {
  return {
    type: "filters/filterContacts",
    payload: name,
  };
};

const rootReducer = (state = initialState, action) => {
  console.log("Action", action);
  console.log("State", state);
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "contacts/deleteContact":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case "filters/filterContacts":
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },

      };
    default:
      return state;
  }
};



export const store = createStore(rootReducer, devToolsEnhancer())



// export const store = configureStore({
//   reducer: {
          
//   contacts:     [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ],
//   locale: {
//     lang: 'ua',
//      },
// }
// });