import { combineReducers } from "redux";
import { layoutReducer } from "./modules/layoutReducer";
import { customerReducer } from "./modules/customerReducer";
import { categoriesReducer } from "./modules/categoriesReducer";
import { reducer as reduxFormReducer } from "redux-form";
import formReducer from "./modules/formReducer";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  customers: customerReducer,
  categories: categoriesReducer,
  form: reduxFormReducer,
  formReducer,
});
