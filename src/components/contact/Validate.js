export function Validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Nombre no debe ser vacío";
  }
  if (!input.email) {
    errors.email = "Email no debe ser vacío";
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    errors.emailFormat = "El email debe ser un formato válido";
  }

  if (!input.subject) {
    errors.subject = "Asunto no debe ser vacío";
  }

  if (!input.message) {
    errors.message = "Mensaje no debe ser vacío";
  }
  return errors;
}
