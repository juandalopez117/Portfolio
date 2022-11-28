import React, {useEffect} from 'react'
import S from './About.module.css'
import image from './image.png'
import DownloadIcon from '@mui/icons-material/Download';


const About = () => {

  function Contact() {

    useEffect(() => {
      window.location.href = "https://google.com";  }, []);
    }
  

  return (
    <div className={S.main} id="AboutESP">
      
      <img src={image} alt='none'/>
      <div className={S.buttonC}>
        <button className={S.button}>
          <a href="https://drive.google.com/file/d/1ZHQhZui2cW5KOZL5J78japJxTg-r2R7M/view?usp=share_link" target="_blank" rel="noreferrer">
            <span className={S.icon}>
              <DownloadIcon sx={{marginTop: '-1.5vw', transform: 'translate(10%, 25%)', paddingRight: '0.5em'}}/>
            </span>
            
            <span>
              Descargar CV
            </span>
          </a>
        </button>
      </div>
  
      <div className={S.text}> 
         <h1>
            Sobre mi
        </h1> 
        <h4>
        Hola, soy Juan David Piedrahita López, Matemático y desarrollador Full-Stack en formación. Cuento con conocimiento en lenguajes de programación como 
        Python, R y Matlab. Conocimiento en lenguajes de desarrollo web como HTML, CSS, JS y uso de librerías como React y Redux. 
        Manejo de librerías relacionadas al backend tales como sequelize y node,js. Respecto a base de datos, 
        conocimientos en leguajes de consulta SQL tales como PostgreSQL. 
        <br/> 
        <br/>
        Actualmente, me encuentro profundizando sobre el diseño e 
        implementación de soluciones de distintos tipos de problemas relacionados al análisis de datos, y de manera alterna 
        creando proyectos de desarrollo web de manera independiente. 
        Soy una persona curiosa, dispuesta a aprender y a aplicar mis conocimientos en la 
        búsqueda de nuevas soluciones a distintos problemas, mediante el trabajo en equipo y resiliencia.
        </h4> 
      </div>
        
    </div>
  )
}

export default About