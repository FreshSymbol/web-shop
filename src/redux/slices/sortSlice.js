import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    isSortAsc: true,
    sortType: {
      name: "популярности",
      value: "rating",
    },
  },
  reducers: {
    setIsSortAsc(state, actions) {
      state.isSortAsc = !actions.payload;
    },
    setSortType(state, actions) {
      state.sortType = actions.payload;
    },
  },
});

export const { setIsSortAsc, setSortType } = sortSlice.actions;
export default sortSlice.reducer;
