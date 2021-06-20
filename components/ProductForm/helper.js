export const validate = (values) => {
  const errors = {};
  const requiredFields = [
    "image",
    "thumbnail",
    "reference",
    "price",
    "width",
    "height",
    "stock",
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}