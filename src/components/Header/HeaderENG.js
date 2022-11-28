import React from "react";
import S from './Header.module.css'
import image from './image.jpg'

import T from '../NavBar/scroll.module.css'
import { HashLink as Link } from "react-router-hash-link";

export default function HeaderENG(){

    return (
        <div className={S.main} id='HeaderENG'>
            <div>
                <h1 className={`${S.Header}`}>
                    Hi everyone!,  
                    <br/>
                    I am Juan David
                </h1> 
                <span className={S.span}>
                     <img src={image} alt="not found" 
                     className={S.img1}/>
                </span>
                <h1 className={`${S.typingdemo}`}> Full-Stack web developer / Mathematician =) </h1>  
            </div>
            <div className='verticalcenter'>
            <Link to='#AboutENG' smooth>
                <button className={T.btn}> More information ↓ </button>
            </Link>
                
            </div>
            
        </div>
    )
}