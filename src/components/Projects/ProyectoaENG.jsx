import React from 'react'
import S from './projects.module.css'
import {List, ListItem, ListItemAvatar } from '@mui/material'
import HenryMarket from './HenryMarket.png'
import {Typography} from '@mui/material'
import Cards from './Card'
import Countries from './Countries.png'
import SourceIcon from '@mui/icons-material/Source';
import ListItemText from '@mui/material/ListItemText'
import ACO from './ACO.png'
import PortfolioENG from './PortfolioENG.png'



const ProyectosENG = () => {
  return (
    <div className={S.main} id='ProyectosENG'>
        <div className={S.text}>
            <h1> Projects </h1>
            
        </div>
        <div className={S.parr}>
            <h3> I have participated and created the following projects </h3>
        </div>
        
        <div className={S.container}> 
            
        <div className={S.Card}>

            <Cards title='Henry Market - Ecommerce'
            date='Noviembre 2022'
            image={HenryMarket}
            generalIdeas='An E-Commerce completely functional. It includes payment gateway
            and user autentication'
            Tecs='Technologies'
            ListOftechnologies={
                <List>
                    <Typography> Backend </Typography>
                    <ListItem sx={{marginTop: '0.1%'}}>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Express" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Node.js" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Sequelize" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '0%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="PostgreSQL" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '0%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Auth0" />
                    </ListItem>


                    <Typography> Frontend</Typography>


                    <ListItem sx={{marginTop: '0.1%'}}>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="React" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Redux" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="JavaScript" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '0%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="CSS" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '0%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Material UI" />
                    </ListItem>
                    
                </List>
            }
            github='https://github.com/Grupo04PartTime07/PF_GRUPO04'
            deploy='https://pg-henrymarket.vercel.app/'
             />
        </div>

        <div>
        <Cards title='Individual project - Countries App'
            date='October 2022'
            image={Countries}
           
            generalIdeas= 'SPA that gets information of an API about countries. It has several filters, controlled forms and data saving'
            Tecs='Technologies'
            ListOftechnologies={

                <List>
                    <Typography> Backend </Typography>
                    <ListItem sx={{marginTop: '0.1%'}}>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Express" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Node.js" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Sequelize" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '0%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="PostgreSQL" />
                    </ListItem>
                    <Typography> Frontend</Typography>
                    <ListItem sx={{marginTop: '0.1%'}}>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="React" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Redux" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="JavaScript" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '0%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="CSS" />
                    </ListItem>
                </List>
            }
            github='https://github.com/juandalopez117/Countries-Project'
        />
        </div>

        <div>
        <Cards title='Portfolio'
            date='November 2022'
            image={PortfolioENG}
            generalIdeas= 'Personal website made with the object of show the application of my acquired knowlegdes to some projects'
            ListOftechnologies={

                <List>
                
                    <Typography> Frontend</Typography>
                    <ListItem sx={{marginTop: '0.1%'}}>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="React" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Redux" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="JavaScript" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '0%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="CSS" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '0%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Material UI" />
                    </ListItem>
                </List>
            }
            github='https://github.com/juandalopez117/Countries-Project'
        />
        </div>

        <div>
        <Cards title='ACO Optimization'
            date='September 2021'
            image={ACO}
            
            generalIdeas='Project realized in Python with the objective of find the best route given two points, passing through an intermediate point '
            ListOftechnologies={

                <List>
                
                    <Typography> Libraries </Typography>
                    <ListItem sx={{marginTop: '0.1%'}}>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Pandas" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Numpy" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <SourceIcon sx={{padding: '2%'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Matplotlib" />
                    </ListItem>
                </List>
            }
            github='https://github.com/juandalopez117/ACO_Project'
        />
        </div>
    
        </div>

    </div>
  )
}

export default ProyectosENG