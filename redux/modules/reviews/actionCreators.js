export const CREATE_REVIEW = "CREATE_REVIEW";
export const EDIT_REVIEW = "EDIT_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const SELECT_ACTIVE_REVIEW = "SELECT_ACTIVE_REVIEW";

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
