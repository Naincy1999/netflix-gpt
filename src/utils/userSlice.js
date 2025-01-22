import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    //add new user to redux store when user sign in
    addUser: (state, action) => {
      return action.payload;
    },
    //remove the user when user sign out
    removeUser: (state, action) => {
      return null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
