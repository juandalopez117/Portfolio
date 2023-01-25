import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import T from "../NavBar/scroll.module.css";
import { useState } from "react";
import sendEmail from "./sendEmail";
const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
    sendEmail(input);
    setInput(initialState);
  };

  return (
    <Box
      id="ContactoESP"
      sx={{
        background:
          "linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))",
        height: "100%",
        paddingBottom: "5%",
      }}
    >
      <Box sx={{ bgcolor: "black", color: "white", padding: "4%" }}>
        <Typography variant="h2"> Contacto </Typography>
      </Box>

      <Box
        sx={{
          padding: "0% 5%",
          color: "white",
          background:
            "linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))",
        }}
      >
        <Typography variant="h5" sx={{ padding: "4% 2%" }}>
          Puedes contactarme al correo electrónico juandalopez117@gmail.com o
          puedes llenar este formulario, me comunicaré contigo a la mayor
          brevedad
        </Typography>
        <Box
          sx={{
            padding: "5% 10%",
            margin: "0% 10%",
            display: "block",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            bgcolor: "rgb(0,0,0,0.5)",
          }}
        >
          <Box
            sm={12}
            sx={{
              padding: "2%",
            }}
          >
            <TextField
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root:hover": {
                  color: "white",
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& > fieldset": { borderColor: "white", color: "white" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": { color: "white" },
              }}
            />
          </Box>

          <Box
            sx={{
              padding: "2%",
            }}
          >
            <TextField
              name="email"
              onChange={(e) => handleChange(e)}
              id="outlined-basic"
              value={input.email}
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root:hover": {
                  color: "white",
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& > fieldset": { borderColor: "white", color: "white" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": { color: "white" },
              }}
            />
          </Box>

          <Box
            sx={{
              padding: "2%",
            }}
          >
            <TextField
              name="subject"
              value={input.subject}
              onChange={(e) => handleChange(e)}
              id="outlined-basic"
              label="Asunto"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root:hover": {
                  color: "white",
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& > fieldset": { borderColor: "white", color: "white" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": { color: "white" },
              }}
            />
          </Box>

          <Box
            sx={{
              padding: "2%",
            }}
          >
            <TextField
              name="message"
              value={input.message}
              onChange={(e) => handleChange(e)}
              id="outlined-basic"
              label="Mensaje"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root:hover": {
                  color: "white",
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& > fieldset": { borderColor: "white", color: "white" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": { color: "white" },
              }}
            />
          </Box>
          <Box>
            <Button
              onClick={handleClick}
              sx={{
                bgcolor: "black",
              }}
              variant="contained"
              className={T.btn}
              size="large"
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
