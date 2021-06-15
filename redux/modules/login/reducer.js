import { initialState } from './initialState'
import { EDIT_PROFILE, CLEAR_PROFILE_DATA, } from './actionCreators'

export const loginReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case CLEAR_PROFILE_DATA:
      localStorage.setItem(
        "profile",
        JSON.stringify({ username: "", password: "" })
      );
      return {
        ...state,
        profile: { username: "", password: "" },
      };
    case EDIT_PROFILE:
      localStorage.setItem(
        "profile",
        JSON.stringify({
          ...state.profile,
          ...payload,
        })
      );
      return {
        ...state,
        profile: { ...payload },
      };
    default:
      return state;
  }
};
