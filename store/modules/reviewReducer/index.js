import moment from "moment";

const CREATE_REVIEW = "CREATE_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const CHANGE_STATUS = "CHANGE_STATUS";
const SELECT_ACTIVE_REVIEW = "SELECT_ACTIVE_REVIEW";

const initialState = {
  activeReview: "0",
  reviewsArray:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("reviewArray")) || []
      : [],
};

export const createReview = (reviewId, reviewData) => {
  return {
    type: "CREATE_REVIEW",
    id: reviewId,
    payload: reviewData,
  };
};

export const editReview = (reviewId, reviewData) => {
  return {
    type: "EDIT_REVIEW",
    id: reviewId,
    payload: reviewData,
  };
};

export const deleteReview = (removedReviews) => {
  return {
    type: "DELETE_REVIEW",
    payload: removedReviews,
  };
};

export const setActiveReview = (reviewId) => {
  return {
    type: "SELECT_ACTIVE_REVIEW",
    payload: reviewId,
  };
};

export const changeStatusReview = (removedReviews, statusReviews) => {
  return {
    type: "CHANGE_STATUS",
    status: statusReviews,
    payload: removedReviews,
  };
};

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
