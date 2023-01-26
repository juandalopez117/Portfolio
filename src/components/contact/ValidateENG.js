export function ValidateENG(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name should not be empty";
  }
  if (!input.email) {
    errors.email = "Email should not be empty";
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    errors.emailFormat =
      "El email should be a valid format (something@something.com)";
  }

  if (!input.subject) {
    errors.subject = "Subject should not be empty";
  }

  if (!input.message) {
    errors.message = "Message should not be empty";
  }
  return errors;
}
