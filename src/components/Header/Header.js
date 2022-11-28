import React from "react";
import S from './Header.module.css'
import image from './image.jpg';
import { HashLink as Link } from "react-router-hash-link";
import T from '../NavBar/scroll.module.css'





export default function Header1(){

    return (
        <div className={S.main} id='HeaderESP'>
            <div className={S.typedout}>
                <h1 className={`${S.Header}`}>
                    ¡Hola a todos!  
                    <br/>
                    soy Juan David
                </h1> 
                <span className={S.span}>
                     <img src={image} alt="not found" 
                     className={S.img1}/>
                </span>
                <h1 className={`${S.typingdemo}`}> Desarrollador web Full-Stack / Matemático =) </h1>  
            </div>
            <div className="verticalcenter">
            <Link to='#AboutESP' smooth>
                <button className={T.btn} > Ver más ↓ </button>
            </Link>
                
            </div>
            
        </div>
    )
}