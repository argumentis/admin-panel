export const validate = (values) => {
  const errors = {};
  const requiredFields = ["product", "customer", "rating", "description"];
  requiredFields.forEach((field) => {
    if (!values[field] || values[field] === "") {
      errors[field] = "Required";
    }
  });
  return errors;
};
