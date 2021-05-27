import { combineReducers } from "redux";
import { layoutReducer } from "./modules/layoutReducer";
import { customerReducer } from "./modules/customerReducer";
import { categoriesReducer } from "./modules/categoriesReducer";
import { reducer as reduxFormReducer } from "redux-form";
import { loginReducer } from "./modules/loginReducer";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  login: loginReducer,
  customers: customerReducer,
  categories: categoriesReducer,
  form: reduxFormReducer,
});
