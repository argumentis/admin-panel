import moment from "moment";
import { initialState } from './initialState'
import { CREATE_REVIEW, EDIT_REVIEW, DELETE_REVIEW, CHANGE_STATUS, SELECT_ACTIVE_REVIEW, } from './actionCreators'

export const reviewsReducer = (
  state = initialState,
  { payload, id, type, status }
) => {
  switch (type) {
    case CREATE_REVIEW:
      const newReview = {
        id: id,
        ...payload,
        date: moment().format("L"),
        status: "pending",
      };
      localStorage.setItem(
        "reviewArray",
        JSON.stringify([...state.reviewsArray, newReview])
      );
      return {
        ...state,
        reviewsArray: [...state.reviewsArray, newReview],
      };

    case EDIT_REVIEW:
      const changeReviewsArray = state.reviewsArray.map((item) => {
        if (item.id === id) {
          return { ...item, description: payload };
        }
        return item;
      });
      localStorage.setItem("reviewArray", JSON.stringify(changeReviewsArray));
      return { ...state, reviewsArray: changeReviewsArray };

    case DELETE_REVIEW:
      const filtredReviewsArray = state.reviewsArray.filter(
        (user) => !payload.includes(user.id)
      );

      localStorage.setItem("reviewArray", JSON.stringify(filtredReviewsArray));

      return {
        ...state,
        reviewsArray: filtredReviewsArray,
      };

    case CHANGE_STATUS:
      const editedReviewsArray = state.reviewsArray.map((review) => {
        if (payload.includes(review.id)) return { ...review, status: status };
        return review;
      });

      localStorage.setItem("reviewArray", JSON.stringify(editedReviewsArray));

      return {
        ...state,
        reviewsArray: editedReviewsArray,
      };

    case SELECT_ACTIVE_REVIEW:
      return {
        ...state,
        activeReview: payload,
      };

    default:
      return state;
  }
};
