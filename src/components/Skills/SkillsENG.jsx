import React from "react";
import S from "./skills.module.css";
import javascript from "./javascript.svg";
import python from "./python.svg";
import html from "./html.svg";
import css from "./css.svg";
import react from "./react.svg";
import redux from "./redux.svg";
import express from "./express.svg";
import sequelize from "./sequelize.svg";
import nodejs from "./nodejs.svg";
import postgre from "./postgre.svg";
import mui from "./mui.png";
import { Box, Grid, Typography } from "@mui/material";
import T from "../NavBar/scroll.module.css";

const Images = [
  javascript,
  python,
  html,
  css,
  react,
  redux,
  express,
  sequelize,
  nodejs,
  postgre,
  mui,
];
const Names = [
  "JavaScript",
  "Python",
  "HTML",
  "CSS",
  "React",
  "Redux",
  "Express",
  "Sequelize",
  "Node.js",
  "PostgreSQL",
  "Material UI",
];
const SkillsESP = () => {
  return (
    <Box
      id="SkillsENG"
      sx={{
        background:
          "linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))",
      }}
    >
      <Box>
        <Box sx={{ bgcolor: "black", color: "white", padding: "3% 5%" }}>
          <Typography variant="h2"> Skills </Typography>
        </Box>
        <Box
          sx={{
            padding: "5%",
            color: "white",
            background:
              "linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))",
          }}
        >
          <Typography variant="h5">
            My formation is focused mainly in the following technologies
          </Typography>
          <Box
            sx={{
              padding: "3% 0%",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
              spacing={2}
            >
              {Images.map((image, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                      sx={{ bgcolor: "black", padding: "5%" }}
                      className={S.image}
                    >
                      <img src={image} width={150} alt="none" />
                    </Box>

                    <Typography sx={{ bgcolor: "black", padding: "1%" }}>
                      {Names[index]}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsESP;
