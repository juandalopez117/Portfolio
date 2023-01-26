import React, { useEffect } from "react";
import S from "./About.module.css";
import image from "./image.png";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Typography, Button, Grid } from "@mui/material";
import T from "../NavBar/scroll.module.css";

const About = () => {
  return (
    <Box
      id="AboutENG"
      sx={{
        background:
          "linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))",
        padding: "5%",
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                translate: "0vh 4vh",
                width: "90%",
                padding: "2% 5%",
              }}
            >
              <img width="100%" src={image} alt="none" />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                justifyContent: "center",
                translate: "0vw 8vw",
              }}
            >
              <Button
                size="large"
                sx={{
                  bgcolor: "black",
                  ":hover": {
                    backgroundColor: "black",
                  },
                }}
                className={T.btn}
                variant="contained"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rZ28FXHxJFqWg62GSjxNNDX4j9MORH-A/view?usp=sharing",
                    "newTab"
                  )
                }
              >
                <DownloadIcon />
                Download CV
              </Button>
            </Box>
          </Grid>

          <Grid item sx={12} md={7}>
            <Box
              sx={{
                margin: "0 auto ",
                padding: "5%",
                color: "white",
              }}
            >
              <Typography variant="h3" sx={{ paddingTop: "2%" }}>
                About me
              </Typography>
              <Typography variant="body1" sx={{ paddingTop: "2%" }}>
                My name is Juan David Piedrahita López, mathematician and
                full-stack developer. I have knowlegde in programming languages
                such as Python. Also, i have several knowlegdes and experience
                in web development languages such as HTML, CSS and JavaScript,
                libraries related with backend (Node.js, Express, Sequelize) and
                frontend (React, Redux)
                <br />
                <br />
                Actually, i am learning in a deeper way about the implementation
                of the technologies before said in a several projects related to
                web development and data analysis in a personal way, with the
                objectove to improve my skills as mathematician and freelance
                programmer. I am a curious person, always searching learn more
                and to applying my actual knowledges in searching of several
                solutions to some challenges in the projects before said. I have
                soft skills such as work-team, discipline, communication and
                resilience
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
