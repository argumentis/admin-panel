export const initialState = {
    activeReview: "0",
    reviewsArray:
      typeof localStorage !== "undefined"
        ? JSON.parse(localStorage.getItem("reviewArray")) || []
        : [],
  };