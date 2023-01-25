import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DrawerComp from "../Drawer/DrawerComp";
import { useMediaQuery, useTheme } from "@mui/material";
import ExampleMaterialSwitch from "./Check";
import { useSelector } from "react-redux";

const NavBar = () => {
  const StateButton = useSelector((state) => state.traduction);
  const [value, setValue] = React.useState();
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const pages = ["Inicio", "Sobre Mi", "Skills", "Proyectos", "Contacto"];
  const pagesENG = ["Home", "About me", "Skills", "Projects", "Contact me"];

  const LinksESP = ["#HeaderESP", "#AboutESP", "#SkillsESP", "#ProyectosESP"];
  const LinksENG = ["#HeaderENG", "#AboutENG", "#SkillsENG", "#ProyectosENG"];

  return (
    <AppBar
      sx={{
        background: "#000000",
        boxShadow: "none",
        position: "sticky",
        overflow: "hidden",
      }}
    >
      <Toolbar>
        <TerminalIcon />
        {isMatch ? (
          <>
            <Typography sx={{ marginLeft: "1%" }}>
              Juan David Piedrahita López
            </Typography>
            <DrawerComp />
          </>
        ) : (
          <>
            <Typography sx={{ marginLeft: "1%" }}>
              Juan David Piedrahita López
            </Typography>
            <Tabs
              sx={{ marginLeft: "auto", marginRight: "5%" }}
              value={value}
              onChange={(e, value) => setValue(value)}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              {!StateButton
                ? pages.map((page, index) => (
                    <Tab key={index} label={page} href={LinksESP[index]} />
                  ))
                : pagesENG.map((page, index) => (
                    <Tab key={index} label={page} href={LinksENG[index]} />
                  ))}
            </Tabs>
          </>
        )}
        <ExampleMaterialSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
