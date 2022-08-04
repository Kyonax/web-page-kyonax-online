import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaGithub, FaRegArrowAltCircleUp } from 'react-icons/fa'
import Logo from '../../assets/LOGO KIONAX-14_White.png'
import DotKyo from '../../assets/dotkyo_lg.svg'
import './home.css'
import { init } from 'ityped'

const Home = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ["el Desarrollo", "las Comunidades", "el Contenido Digital", "los Vídeojuegos", "las Historias", "la Innovación", "el Arte y Diseño"]
        })
    }, [])

    return (
        <div name='home' className='w-full h-screen'>

            {/* Container */}
            <div className='z-10 max-w-[1000px] h-[10.62%] mx-auto flex flex-col justify-center text-white items-center'>
                <a href="/"><img src={Logo} alt="Logo Dot Kyo - Developer" className='fill-white h-[15px] xl:h-[20px] selected-log' /></a>
            </div>

            <div className='z-10 max-w-[1000px] mx-auto flex flex-col justify-center h-[73.74%] text-white items-center'>
                <p className='text-[10px] xl:text-[15px] font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font color-span mb-[-10px] xl:mb-[-20px]'>TECNOLOGIA - DESARROLLO - NOTICIAS</p>
                <a className='text-[50px] xl:text-[80px] font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font mb-[-6px]'>DOT KYO</a>
                <div className='flex mb-2'><a href='https://kyonax.link/twitter' className='mr-3 hover:text-[#ff7c01]'><FaTwitter /></a> <a href='https://www.tiktok.com/@dot_kyo' className='mr-3 hover:text-[#ff7c01]'><FaTiktok /></a> <a href="https://kyonax.link/youtube" className='mr-3 hover:text-[#ff7c01]'><FaYoutube /></a> <a href="https://kyonax.link/linkeedin" className='mr-3 hover:text-[#ff7c01]'><FaLinkedin /></a> <a className='hover:text-[#ff7c01]' href="https://kyonax.link/github"><FaGithub /></a></div>
                <div className='flex text-[9px] md:text-[12px] xl:text-[14px] text-[#ff7c01] justify-center text-center'><a className='text-[9px] mt-[2px] md:mt-1 xl:text-[12px] xl:mt-1'><FaRegArrowAltCircleUp/></a><a className='font-handmade mr-2 ml-2 mb-3 '>Click Aquí</a> <a className='text-[9px] mt-[2px] md:mt-1 xl:text-[12px] xl:mt-1'><FaRegArrowAltCircleUp/></a></div>
                <a className='justify-center text-center mr-2 ml-2 text-[9px] md:text-[11px] xl:text-[14px] mb-6'>Enfocado a la web, el desarrollo, y noticias de constantes avances tecnológicos Kyonax ofrece soluciones y análisis mediante el Desarrollo de Aplicaciones, Páginas Web, Aplicaciones Descentralizadas, Scripts de Código Abierto, Contenido Digital, y Entretenimiento.</a>
                <p className='justify-center text-center text-[9px] md:text-[11px] xl:text-[13px] mb-9'>Contratación &amp; Solicitudes profesionales: <a className='text-[#ff7c01] font-black'>contacto@kyonax.com</a></p>
                <button class="text-[10px] xl:text-[14px] bg-[#ff7c01] hover:bg-[#a819eb] text-white font-bold py-2 px-4 border-b-4 border-[#a0530b] hover:border-[#560D78] rounded">
                    Ingresa a la Comunidad
                </button>
            </div>

            <div className='z-10 mt-[-30px] xl:mt-0 xl:mb-[80px] mx-auto flex flex-col justify-center text-white items-center'>
                <img src={DotKyo} alt="Logo Dot Kyo - Developer" className='selected-logo w-[60px] xl:w-[80px] change-svg-color-v2' />
            </div>



        </div>
    )
}

export default Home