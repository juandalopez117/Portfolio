import React, { Fragment, useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {useSelector} from 'react-redux'

import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = () => {
  const StatusButton = useSelector(state => state.traduction)

  const [openDrawer, setOpenDrawer] = useState(false)

  const pages = ['Inicio', 'Sobre Mis', 'Proyectos', 'Contacto']
  const pagesENG = ['Home', 'About me', 'Projects', 'Contact me']
  return (
    <Fragment>
        <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
            <List sx={{width: "10%"}}>
              {
                !StatusButton ? (
                  pages.map((page, index) => (
                    <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                      <ListItemIcon>
                        <ListItemText>
                          {page}
                        </ListItemText>
                      </ListItemIcon>
                  </ListItemButton>
                  ))
                ) :
                (
                  pagesENG.map((page, index) => (
                    <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                      <ListItemIcon>
                        <ListItemText>
                          {page}
                        </ListItemText>
                      </ListItemIcon>
                  </ListItemButton>
                  ))
                )
              }

            </List>
        </Drawer>
        <IconButton sx={{color: 'white', marginLeft: 'auto'}}onClick={()=> setOpenDrawer(!openDrawer) }>
          <MenuIcon/>
        </IconButton>
    </Fragment>
  )
}

export default DrawerComp