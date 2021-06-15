import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { layoutReducer } from "./modules/layout/reducer";
import { customerReducer } from "./modules/customers/reducer";
import { categoriesReducer } from "./modules/categories/reducer";
import { loginReducer } from "./modules/login/reducer";
import { productsReducer } from "./modules/products/reducer";
import { reviewsReducer } from "./modules/reviews/reducer";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  login: loginReducer,
  reviews: reviewsReducer,
  customers: customerReducer,
  categories: categoriesReducer,
  products: productsReducer,
  form: reduxFormReducer,
});
