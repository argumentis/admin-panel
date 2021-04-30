import { combineReducers } from "redux";
import { layoutReducer } from "./modules/layoutReducer/index";
import { loginReducer } from "./modules/login/index";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  loginUser: loginReducer,
});
