import React from "react";
import S from "./Header.module.css";
import image from "./image.jpg";
import T from "../NavBar/scroll.module.css";
import { Box, Typography, Grid, Button } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import { HashLink as Link } from "react-router-hash-link";
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

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
              }}
            >
              <img src={image} alt="not found" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "4%" }}>
        <Typography
          variant="h2"
          color="white"
          sx={{ fontSize: { xs: "7vw", md: "3vw" } }}
        >
          I am
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "monospace",
            color: "white",
            fontSize: { xs: "7vw", md: "3vw" },
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
          display: "block",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Link to="#AboutENG" smooth>
          <Button
            variant="contained"
            width="100%"
            className={T.btn}
            size="large"
            sx={{
              translate: "0% -50%",
              bgcolor: "black",
              ":hover": {
                backgroundColor: "black",
              },
              padding: "1% 3%",
            }}
          >
            See more...
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
