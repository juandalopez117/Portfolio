import React from 'react'
import S from './About.module.css'
import image from './image.png'
import DownloadIcon from '@mui/icons-material/Download';


const AboutENG = () => {
  return (
    <div className={S.main} id='AboutENG'>
     <img src={image} alt='none'/>
     <div className={S.buttonC}>
     <button className={S.button}>
          <a href="https://drive.google.com/file/d/1I5gj0b8c6ulwcSBSqLC7eFGwGfEWc18f/view?usp=share_link" target="_blank" rel="noreferrer">
            <span className={S.icon}>
              <DownloadIcon sx={{marginTop: '-1.5vw', transform: 'translate(10%, 25%)', paddingRight: '0.5em'}}/>
            </span>
            
            <span>
              Download CV
            </span>
          </a>
        </button>
        
      </div>
      <div className={S.text}> 
         <h1>
            About me
        </h1> 
        <h4>
        My name is Juan David Piedrahita López, mathematician and full-stack developer in formation. I have knowlegde in programming 
        languages such as Python. Also, i have several knowlegdes and experience in web development languages such as HTML, CSS and JavaScript, 
        libraries related with backend (Node.js, Express, Sequelize) and frontend (React, Redux)
        <br/> 
        <br/>
        Actually, i am learning in a deeper way about the implementation of the technologies before said in a several projects related to web development and
        data analysis in a personal way, with the objectove to improve my skills as mathematician and freelance programmer. I am a curious person, always searching learn more 
        and to applying my actual knowledges in searching of several solutions to some challenges in the projects before said.
        I have soft skills such as work-team, discipline, communication and resilience
        </h4> 
      </div>
    </div>
  )
}

export default AboutENG