//store.js

// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
// import { createStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers } from "redux";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";


export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
})




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