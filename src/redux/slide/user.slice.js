import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  gmail: "",
  faceBook: "",
  code: "",
  userName: "",
  avatar: "",
  introduce: "",
  gender: "",
  friends: null,
  refCode: "",
  _id: "",
  idUserToolAI: "",
  createdDate: "",
  createdBy: "",
  lastUpdatedDate: "",
  lastUpdatedBy: "",
  isDeleted: false,
  avatarPersonal: "",
  studyLevel: 0,
  birthDay: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload; // Trả về state mới
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setStudyLevel: (state, action) => {
      state.studyLevel = action.payload;
    },
  },
});

export const { setUser, setAvatar, setPhoneNumber, setStudyLevel } =
  userSlice.actions;
export const getRefCodeUser = (state) =>
  state.persistedUserReducer.user.refCode;
export const getPhoneNumber = (state) =>
  state.persistedUserReducer.user.phoneNumber;
export const getUserInfoState = (state) => state.persistedUserReducer.user;
export default userSlice.reducer;
