import React, { Fragment, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";

import Divider from "@mui/material/Divider";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import { Box } from "@mui/system";
const DrawerComp = () => {
  const StatusButton = useSelector((state) => state.traduction);
  const [openDrawer, setOpenDrawer] = useState(false);

  const pages = ["Inicio", "Sobre Mi", "Skills", "Proyectos", "Contacto"];
  const pagesENG = ["Home", "About me", "Skills", "Projects", "Contact me"];
  const LinksESP = [
    "#HeaderESP",
    "#AboutESP",
    "#SkillsESP",
    "#ProyectosESP",
    "#ContactoESP",
  ];
  const LinksENG = [
    "#HeaderENG",
    "#AboutENG",
    "#SkillsENG",
    "#ProyectosENG",
    "#ContactENG",
  ];

  const icons = [
    <HomeIcon sx={{ color: "white" }} />,
    <InfoIcon sx={{ color: "white" }} />,
    <PsychologyIcon sx={{ color: "white" }} />,
    <ListAltIcon sx={{ color: "white" }} />,
    <ContactMailIcon sx={{ color: "white" }} />,
  ];
  return (
    <Box>
      <Drawer
        open={openDrawer}
        PaperProps={{
          sx: {
            color: "white",
            bgcolor: "black",
          },
        }}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {!StatusButton
              ? pages.map((page, index) => (
                  <Box>
                    <ListItemButton
                      key={index}
                      onClick={() => setOpenDrawer(false)}
                    >
                      <ListItemIcon>{icons[index]}</ListItemIcon>
                      <Link
                        to={LinksESP[index]}
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <ListItemText>{page}</ListItemText>
                      </Link>
                    </ListItemButton>
                  </Box>
                ))
              : pagesENG.map((page, index) => (
                  <Box>
                    <ListItemButton
                      key={index}
                      onClick={() => setOpenDrawer(false)}
                    >
                      <ListItemIcon>{icons[index]}</ListItemIcon>
                      <Link
                        to={LinksENG[index]}
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <ListItemText>{page}</ListItemText>
                      </Link>
                    </ListItemButton>
                  </Box>
                ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default DrawerComp;
