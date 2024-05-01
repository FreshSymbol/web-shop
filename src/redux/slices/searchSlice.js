import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    setValue(state, actions) {
      state.value = actions.payload;
    },
  },
});

export const { setValue } = searchSlice.actions;
export default searchSlice.reducer;
