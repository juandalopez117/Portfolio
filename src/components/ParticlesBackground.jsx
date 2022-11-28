import React from "react"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import ParticlesConfig from "./config/particles-config"
import { loadFull } from "tsparticles"



export default function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, [])


    return (

            <Particles params={ParticlesConfig}
                id='tsparticles'
                init={particlesInit} loaded={particlesLoaded} 
            >
            </Particles> 
            
   
    )
}

