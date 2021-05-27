const EDIT_PROFILE = "EDIT_PROFILE";
const CLEAR_PROFILE_DATA = "CLEAR_PROFILE_DATA";

const initialState = {
  profile:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("profile")) || {
          username: "",
          password: "",
        }
      : {},
};
export const clearProfile = () => {
  return {
    type: "CLEAR_PROFILE_DATA",
  };
};
export const editProfile = (profileData) => {
  return {
    type: "EDIT_PROFILE",
    payload: profileData,
  };
};

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
