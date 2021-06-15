export const initialState = {
    profile:
      typeof localStorage !== "undefined"
        ? JSON.parse(localStorage.getItem("profile")) || {
            username: "",
            password: "",
          }
        : {},
  };