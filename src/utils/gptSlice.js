import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    //show and hide gpt search
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
