import { combineReducers } from "redux";
import { layoutReducer } from "./modules/layoutReducer/index";
import { customerReducer } from "./modules/customerReducer/index";
import { reducer as reduxFormReducer } from "redux-form";
import formReducer from "./modules/formReducer";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  customers: customerReducer,
  form: reduxFormReducer,
  formReducer,
});
