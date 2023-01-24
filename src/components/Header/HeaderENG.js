import React from "react";
import S from "./Header.module.css";
import image from "./image.jpg";
import T from "../NavBar/scroll.module.css";
import { Box, Typography, Grid, Button } from "@mui/material";
import TypewriterComponent from "typewriter-effect";

export default function Header1() {
  return (
    <Box
      id="HeaderENG"
      sx={{
        bgcolor: "black",
        flexGrow: 2,
        minHeight: "80vh",
        padding: "5%",
        display: "block",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={7}>
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontSize: { xs: "10vw", md: "7vw" },
                }}
                className={`${S.Header}`}
              >
                ¡Hi there!,
                <br />I am Juan David
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Box
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <img src={image} alt="not found" width="500rem" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "0% 2%" }}>
        <Typography variant="h2" color="white">
          I am
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "monospace",
            color: "white",
            fontSize: { xs: "5vw", md: "3vw" },
          }}
        >
          <TypewriterComponent
            options={{
              strings: ["Developer </> ", ` Mathematician ∢`, "Curious 🤔"],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "black",
          padding: "0% 3%",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          width="100%"
          className={T.btn}
          size="large"
          sx={{
            bgcolor: "black",
            ":hover": {
              backgroundColor: "black",
            },
            padding: "1% 3%",
          }}
        >
          See more...
        </Button>
      </Box>
    </Box>
  );
}
