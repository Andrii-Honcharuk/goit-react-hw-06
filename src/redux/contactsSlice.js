// contactsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const item = [
{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
{ id: "id-5", name: "Ann", number: "227-91-36" },
];


const slice = createSlice({
  name: "contacts",
  initialState: { contacts: item 
  },
  reducers: {
    addContact(state, action) { state.contacts.push(action.payload);},
    deleteContact(state, action) { state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);}
  },
})
export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;

