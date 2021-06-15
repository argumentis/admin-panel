export const CHANGE_DRAWER_STATUS = "CHANGE_DRAWER_STATUS";
export const SET_PAGE_NAME = "SET_PAGE_NAME";

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