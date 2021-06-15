import { initialState } from './initialState'
import { CHANGE_DRAWER_STATUS, SET_PAGE_NAME, } from './actionCreators'

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
