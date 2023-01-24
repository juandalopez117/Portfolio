import React from "react";
import S from "./Header.module.css";
import image from "./image.jpg";
import { HashLink as Link } from "react-router-hash-link";
import T from "../NavBar/scroll.module.css";
import { Box, Typography, Grid } from "@mui/material";
import { bgcolor } from "@mui/system";
import TypewriterComponent from "typewriter-effect";

export default function Header1() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        flexGrow: 2,
        height: "100vh",
        padding: "4%",
        alignItems: "center",
        justifyContent: "center",
        display: { xs: "block" },
        overflow: "auto",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={7}>
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
                fontSize: { xs: "12vw", md: "700%" },
              }}
              className={`${S.Header}`}
            >
              ¡Hola a todos!,
              <br />
              soy Juan David
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <img src={image} alt="not found" width="80%" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box sx={{ paddingLeft: "2%" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "monospace",
                color: "white",
                fontSize: { xs: "8vw", md: "400%" },
              }}
            >
              Soy
              <TypewriterComponent
                options={{
                  strings: [
                    "Desarrollador </> ",
                    ` Matemático ∢`,
                    "Curioso 🤔",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ paddingLeft: "45%", paddingBottom: "2%" }}>
        <Link to="#AboutESP" smooth>
          <button className={T.btn}> Ver más ↓ </button>
        </Link>
      </Box>
    </Box>
  );
}
