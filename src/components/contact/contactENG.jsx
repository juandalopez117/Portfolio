import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import T from "../NavBar/scroll.module.css";
import { useState } from "react";
import sendEmail from "./sendEmail";
import { ValidateENG } from "./ValidateENG";
const ContactENG = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      ValidateENG({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
    sendEmail(input);
    setInput(initialState);
  };

  return (
    <Box
      id="ContactENG"
      sx={{
        background:
          "linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))",
        height: "100%",
        paddingBottom: "5%",
      }}
    >
      <Box sx={{ bgcolor: "black", color: "white", padding: "4%" }}>
        <Typography variant="h2"> Contact me </Typography>
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
          You can send me an email to juandalopez117@gmail.com. Also, you can
          complete this form, and i will communicate with you as soon as
          possible Puedes contactarme al correo electrónico
          juandalopez117@gmail.com o puedes llenar este formulario, me
          comunicaré contigo a la mayor brevedad
        </Typography>
        <Box
          sx={{
            padding: "5% 10%",
            margin: "0rem 15rem",
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
              error={errors.name ? true : false}
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              id="outlined-basic"
              label="Name"
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
            {errors.name && (
              <FormHelperText sx={{ color: "red" }}>
                {" "}
                {errors.name}{" "}
              </FormHelperText>
            )}
          </Box>

          <Box
            sx={{
              padding: "2%",
            }}
          >
            <TextField
              error={errors.email || errors.emailFormat ? true : false}
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
            {errors.email && errors.email.length > 0 ? (
              <FormHelperText sx={{ color: "red" }}>
                {errors.email}
              </FormHelperText>
            ) : (
              <FormHelperText sx={{ color: "red" }}>
                {errors.emailFormat}
              </FormHelperText>
            )}
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
              label="Subject"
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
              label="Message"
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
            {errors.message && (
              <FormHelperText sx={{ color: "red" }}>
                {" "}
                {errors.message}{" "}
              </FormHelperText>
            )}
          </Box>
          <Box
            sx={{
              paddingTop: "2%",
            }}
          >
            <Button
              disabled={
                errors.name ||
                errors.email ||
                errors.emailFormat ||
                errors.message ||
                errors.subject ||
                input === initialState
                  ? true
                  : false
              }
              onClick={handleClick}
              sx={{
                bgcolor: "black",
              }}
              variant="contained"
              className={T.btn}
              size="large"
            >
              Send <SendIcon sx={{ paddingLeft: "10%" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactENG;
