//store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import  contactsReducer  from "./contactsSlice";
import filtersReducer from "./filtersSlice";


const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ["contacts"]
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  }
});

export const persistor = persistStore(store);