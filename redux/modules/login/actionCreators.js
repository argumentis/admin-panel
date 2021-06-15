export const EDIT_PROFILE = "EDIT_PROFILE";
export const CLEAR_PROFILE_DATA = "CLEAR_PROFILE_DATA";

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