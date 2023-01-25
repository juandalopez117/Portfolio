import emailjs from "@emailjs/browser";

const sendEmail = ({ name, email, subject, message }) => {
  let templateParams = {
    to_email: email,
    from_name: name,
    subject: subject,
    message: message,
  };
  emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

  emailjs
    .send(
      "service_hpiu85q",
      "template_a8n09xo",
      templateParams,
      "h6YaBqwB0aty5rrfb"
    )
    .then(
      function (response) {
        console.log("Correo enviado con éxito: " + response.status);
      },
      function (error) {
        console.log("Error al enviar el correo: " + JSON.stringify(error));
      }
    );
};

export default sendEmail;
