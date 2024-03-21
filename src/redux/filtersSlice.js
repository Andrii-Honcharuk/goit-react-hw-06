// filtersSlice.js

import { createSlice } from "@reduxjs/toolkit";

// const filters = {
//   name: "",
// }

const slice = createSlice({
  name: "filters",
  initialState: {
    name: ""
  },
  reducers: {
    filterContactsByName(state, action) { 
      state.name = action.payload;
    }
  }
})

export default slice.reducer;

export const { filterContactsByName } = slice.actions;



