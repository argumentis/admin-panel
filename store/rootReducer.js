import {combineReducers} from "redux";
import {testReducer} from './modules/test/index';
import {loginReducer} from './modules/login/index';

export const rootReducer = combineReducers({
    test: testReducer,
    loginUser: loginReducer
})