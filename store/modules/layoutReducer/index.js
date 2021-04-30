const CHANGE_DRAWER_STATUS = "CHANGE_DRAWER_STATUS";
const SET_PAGE_NAME = "SET_PAGE_NAME";

const initialState = {
  drawerStatus: true,
  openedPage: "Dashboard",
};

export const changeDrawerStatus = () => {
  return {
    type: "CHANGE_DRAWER_STATUS",
  };
};
export const setPageName = (pageName) => {
  return {
    type: "SET_PAGE_NAME",
    payload: pageName,
  };
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DRAWER_STATUS:
      return {
        ...state,
        drawerStatus: !state.drawerStatus,
      };
    case SET_PAGE_NAME:
      return {
        ...state,
        openedPage: action.payload,
      };
    default:
      return state;
  }
};
