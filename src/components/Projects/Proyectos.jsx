import React from 'react'
import RecipeReviewCard from './Card'
import S from './projects.module.css'
import {List, ListItem, ListItemAvatar } from '@mui/material'
import HenryMarket from './HenryMarket.png'
import {Typography} from '@mui/material'
import Cards from './Card'
import Countries from './Countries.png'
import SourceIcon from '@mui/icons-material/Source';
import ListItemText from '@mui/material/ListItemText'
import portfolio from './portfolio.png'
import ACO from './ACO.png'


const Proyectos = () => {
  return (
    <div className={S.main} id='ProyectosESP'>
        <div className={S.text}>
            <h1> Proyectos </h1>
            
        </div>
        <div className={S.parr}>
            <h3> He participado y he realizado los siguientes proyectos </h3>
        </div>
        
        <div className={S.container}> 
            
        <div className={S.Card}>
            <Cards title='Henry Market - Ecommerce'
            date='Noviembre 2022'
            image={HenryMarket}
            generalIdeas='Un E-Commerce completamente funcional, incluye pasarela de 
            pagos, autenticación y gestión de usuarios'
            Tecs='Tecnologías'
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
        <Cards title='Proyecto Individual - Countries App'
            date='Octubre 2022'
            image={Countries}
            generalIdeas='SPA que obtiene información general de una API 
            sobre paises. Cuenta con filtros, formularios y guardado de datos'
            Tecs='Tecnologías'
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
        <Cards title='Portafolio'
            date='Noviembre 2022'
            image={portfolio}
            generalIdeas='Pagina web realizada con el objeto de mostrar la aplicación
            de mis conocimientos adquiridos a diversos proyectos'
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
                        <ListItemAvatar href='#HeaderESP'>
                            <SourceIcon sx={{padding: '2%'}} />
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
        <Cards title='Optimización ACO'
            date='Noviembre 2021'
            image={ACO}
            generalIdeas='Proyecto realizado en Python con el objetivo de encontrar la mejor 
            ruta dados dos puntos, pasando por un punto intermedio'
            ListOftechnologies={

                <List>
                
                    <Typography> Librerias </Typography>
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

export default Proyectos