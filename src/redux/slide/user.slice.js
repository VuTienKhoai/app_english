import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userName: "",
  email: "",
  role: "",
  address: "",
  numberPhone: "",
  age: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload; // Trả về state mới
    },
    setIdUser: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUser, setIdUser } = userSlice.actions;
export const getUserInfoState = (state) => state.persistedUserReducer.user;
export default userSlice.reducer;
