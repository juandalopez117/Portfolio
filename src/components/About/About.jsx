import React, { useEffect } from "react";
import S from "./About.module.css";
import image from "./image.png";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Typography, Button, Grid } from "@mui/material";
import T from "../NavBar/scroll.module.css";

const About = () => {
  return (
    <Box
      id="AboutESP"
      sx={{
        background:
          "linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))",
        padding: "5%",
        height: "100%",
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
                    "https://drive.google.com/file/d/1BFT-rGN7JeQrlvftEfpZjhCH6L-1AFmS/view?usp=share_link",
                    "newTab"
                  )
                }
              >
                <DownloadIcon />
                Descargar CV
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
                Sobre mí
              </Typography>
              <Typography sx={{ paddingTop: "2%" }}>
                Hola, soy Juan David Piedrahita López, Matemático y
                desarrollador Full-Stack en formación. Cuento con conocimiento
                en lenguajes de programación como Python, R y Matlab.
                Conocimiento en lenguajes de desarrollo web como HTML, CSS, JS y
                uso de librerías como React y Redux. Manejo de librerías
                relacionadas al backend tales como sequelize y node,js. Respecto
                a base de datos, conocimientos en leguajes de consulta SQL y
                programas de gestión de bases de datos tales como PostgreSQL.
                <br />
                <br />
                Actualmente, me encuentro profundizando sobre el diseño e
                implementación de soluciones de distintos tipos de problemas
                relacionados al análisis de datos, y de manera alterna creando
                proyectos de desarrollo web de manera independiente. Soy una
                persona curiosa, dispuesta a aprender y a aplicar mis
                conocimientos en la búsqueda de nuevas soluciones a distintos
                problemas, mediante el trabajo en equipo y resiliencia.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
