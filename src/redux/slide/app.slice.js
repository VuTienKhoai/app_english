import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  lang: "vi",
  darkMode: false,
  saveLogin: false,
  saveLoginInfo: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    resetLogin: (state) => {
      state.token = null;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogout: (state) => {
      return {
        ...initialState,
        saveLoginInfo: state.saveLoginInfo,
      };
    },
    setSaveLogin: (state, action) => {
      state.saveLogin = action.payload.isSave;
      state.saveLoginInfo = action.payload.saveLoginInfo;
    },
    resetAccount: (state) => {
      return initialState;
    },
  },
});

export const appBackGroundSlice = createSlice({
  name: "appBackGround",
  initialState: {
    isBackGround: false,
  },
  reducers: {
    setIsBackGround: (state, action) => {
      state.isBackGround = action.payload;
    },
  },
});

export const {
  resetLogin,
  setTokenToolAI,
  setToken,
  setSaveLogin,
  setActiveModal,
  setLogout,
  resetAccount,
} = appSlice.actions;

export const getTokenState = (state) => state.persistedReducer.app.token;
export const saveLoginState = (state) => state.persistedReducer.app.saveLogin;
export const getSaveLoginInfo = (state) =>
  state.persistedReducer.app.saveLoginInfo;
export default appSlice.reducer;
