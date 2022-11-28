import React from 'react'
import S from './skills.module.css'
import javascript from './javascript.svg'
import python from './python.svg'
import html from './html.svg'
import css from './css.svg'
import react from './react.svg'
import redux from './redux.svg'
import express  from './express.svg'
import sequelize from './sequelize.svg'
import nodejs from './nodejs.svg'
import postgre from './postgre.svg'

const Images = [javascript, python, html, css, react, redux, express, sequelize, nodejs, postgre]
const Names = ["JavaScript", "Python", "HTML", "CSS", "React", "Redux", "Express", "Sequelize", "Node.js", "PostgreSQL"]
const SkillsESP = () => {
  return (
    <div className={S.main} id='SkillsESP'>
        <div>
            <h1> Skills </h1>
            <h3> Me desempeño principalmente en las siguientes tecnologías </h3>
        </div>
            <div className={S.image}>
                {
                    Images.map((image, index) => {
                        return (
                            <div className={S.ImageC}>
                                <img src={image} alt='none'/>
                                <p> {Names[index]}</p>
                            </div>
                        )
                    })
                }
                
            </div>
    </div>
  )
}

export default SkillsESP

