// contactsSlice.js
export const contacts = [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
{ id: "id-5", name: "Ann", number: "227-91-36" },
];

export const contactsReducer = (state = { contacts:contacts }, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        contacts: [...state.contacts, action.payload],
      };
    case "contacts/deleteContact":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
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