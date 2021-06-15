export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const selectCategory = (categoryId) => {
  return {
    type: "SELECT_CATEGORY",
    id: categoryId,
  };
};

export const editCategory = (categoryId, categoryName) => {
  return {
    type: "EDIT_CATEGORY",
    id: categoryId,
    payload: categoryName,
  };
};

export const deleteCategory = (removedCategory) => {
  return {
    type: "DELETE_CATEGORY",
    payload: removedCategory,
  };
};
