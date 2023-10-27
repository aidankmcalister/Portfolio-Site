export const validateContactForm = (values) => {
  values.preventDefault();
  const errors = {};
  if (!values.email.includes("@")) {
    errors.email = "Email should contain a @";
  }
  if (!values.subject) {
    errors.subject = "Cannot be empty.";
  }
  if (!values.message) {
    errors.message = "Cannot be empty.";
  }
  return errors;
};
