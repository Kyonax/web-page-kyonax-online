import React, { useState, useEffect } from 'react'
import './about.css'
import CabezaRota from '../../assets/Cabeza_Rota.png'
import Hunters from '../../assets/Hunters_Esportslogo.webp'
import RottenVille from '../../assets/RottenVille_White.png'
import LauGamerCO from '../../assets/LaugamerCO.webp'
import Curtech from '../../assets/Curtech.png'
import { motion } from 'framer-motion'

export const About = () => {
    return (
        <div className='w-full h-screen flex flex-wrap items-center justify-center text-left text-white' >
            <div className='w-full h-[80px]'></div>
            <div className='w-full lg:w-1/5'></div>
            <div className='w-full lg:w-3/5'>
                <h1 className=' m-6 text-5xl md:text-6xl font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font'>ACERCA DE</h1>
                <p className='ml-6 mr-6 mt-[-6px] text-[17px] font-thin '> <a href="https://www.linkedin.com/in/kyonax/">Cristian Moreno</a> (en adelante, <strong className='font-black'>Kyonax</strong>) es un <a className='color-span'>Desarrollador Full Stack, Creador de Contenido, Editor/Diseñador Multimedia, y Community Manager</a> enfocado en la creación/desarrollo de Comunidades utilizando herramientas y tecnologías digitales, nacido en Bogotá (Colombia) siendo el creador y fundador de la marca Kyonax, ofreciendo el mismo Servicios profesionales de Publicidad, Desarrollo, Diseño, Manejo de Comunidades Digitales, Asesorías, entre otros.</p>
                <p className='ml-6 mr-6 mt-9 text-[17px] font-thin '>Kyonax es una marca conformada por tres importantes dependencias, cada dependencia asignada a un respectivo nombre — <a className='color-span'>Dot Kyo, Kyonax Lost in the Multiverse, Kyo NFT</a> — cuyo objetivo es brindar comodidad, identidad, y enfoque a cada una de los conocimientos profesionales de Kyonax.</p>
                <h1 className=' m-6 text-2xl md:text-[20px] font-bold'> Dot Kyo</h1>
                <p className='ml-6 mr-6 mt-[-18px] text-[17px] font-thin '>La Tecnología y sus constantes avances imponen nuevos retos en la sociedad los cuáles son tarea pincipal de Dot Kyo, ofreciendo soluciones y análisis mediante el Desarrollo de Aplicaciones, Páginas Web, Aplicaciones Descentralizadas, y Scripts de Código Abierto. <a href="" className='text-[13px] text-[#ff7c01]'>[más información]</a> </p>
                <h1 className=' m-6 text-2xl md:text-[20px] font-bold'> Kyonax Lost in the Multiverse</h1>
                <p className='ml-6 mr-6 mt-[-18px] text-[17px] font-thin '>La Creación de Contenido y el Entretenimiento son un pilar muy importante para nuestra cultura digital de hoy en día, desde el Contenido Informativo que absorbemos diariamente en las plataformas digitales al Contenido de Ocio que nos distrae en nuestros ratos libres, estos son la experticie principal de Kyonax Lost in the Multiverse. <a href="" className='text-[13px] text-[#ff007b]'>[más información]</a> </p>
                <h1 className=' m-6 text-2xl md:text-[20px] font-bold'> Kyo NFT</h1>
                <p className='ml-6 mr-6 mt-[-18px] text-[17px] font-thin '> Decentralización, Comunidades NFT, Identidades en la Web 3.0, y más Tecnología de la Blockchain son nuevos avances digitales que están llegando a nuestra sociedad para quedarse, dando paso a Kyo NFT el cuál se encuentra al día en cada uno de ellos, perteneciendo activamente en Comunidades y Proyectos de este ecosistema. <a href="" className='text-[13px] text-[#a819eb]'>[más información]</a>   </p>
                <div className='w-full flex flex-wrap items-center justify-center text-center '>
                    <p className='mt-6 color-span text-[13px] md:text-[16px]'> LA CREATIVIDAD, LÓGICA Y PASIÓN JUNTAS EN UN MISMO LUGAR  </p>
                </div>
            </div>
            <div className='w-full lg:w-1/5'></div>
            <div className='mt-[70px] md:mt-[90px] w-full flex flex-wrap items-center justify-center'>
                <div className='w-1/7'></div>
                <div className='w-1/7 h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] ml-3 mr-3'> <img src={CabezaRota} className='h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] opacity-70' alt="Cabeza Rota Logo" /> </div>
                <div className='w-1/7 h-[80px] sm:h-[90px] md:h-[110px] lg:h-[120px] ml-3 mr-3'> <img src={Hunters} className='h-[80px] sm:h-[90px] md:h-[110px] lg:h-[120px] opacity-70' alt="Hunters E-Sports Logo" /></div>
                <div className='w-1/7 h-[20px] sm:h-[30px] md:h-[50px] lg:h-[60px] ml-3 mr-3'> <img src={RottenVille} className='h-[20px] sm:h-[30px] md:h-[50px] lg:h-[60px] opacity-70' alt="RottenVille Project Logo" /> </div>
                <div className='w-1/7 h-[70px] sm:h-[80px] md:h-[100px] lg:h-[110px] ml-3 mr-3'> <img src={LauGamerCO} className='h-[70px] sm:h-[80px] md:h-[100px] lg:h-[110px] opacity-70' alt="LauGamerCO Logo" /> </div>
                <div className='w-1/7 h-[50px] sm:h-[60px] md:h-[80px] lg:h-[90px] ml-3 mr-3'> <img src={Curtech} className='h-[50px] sm:h-[60px] md:h-[80px] lg:h-[90px] opacity-70' alt="Curtech Logo" /> </div>                
                <div className='w-1/7'></div>
                <div className='mt-3 mb-9 w-full text-center text-[11px] text-gray-500'>Marcas con las que ha trabajado Kyonax</div>
            </div>
            <div className='w-full h-[80px]'></div>
        </div>
    )
}
