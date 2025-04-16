import { combineReducers } from "redux";
import appReducer from "../slide/app.slice";
import userReducer from "../slide/user.slice";

const RootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

export default RootReducer;
