import { combineReducers } from "redux";
import { layoutReducer } from "./modules/layoutReducer";
import { customerReducer } from "./modules/customerReducer";
import { categoriesReducer } from "./modules/categoriesReducer";
import { reducer as reduxFormReducer } from "redux-form";
import { loginReducer } from "./modules/loginReducer";
import { productsReducer } from "./modules/productsReducer";
import { reviewsReducer } from "./modules/reviewReducer";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  login: loginReducer,
  reviews: reviewsReducer,
  customers: customerReducer,
  categories: categoriesReducer,
  products: productsReducer,
  form: reduxFormReducer,
});
