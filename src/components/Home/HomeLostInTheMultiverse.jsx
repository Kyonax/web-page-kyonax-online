import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaGithub, FaRegArrowAltCircleUp, FaTwitch } from 'react-icons/fa'
import Logo from '../../assets/LOGO KIONAX-14_White.png'
import LostInTheMultiverse from '../../assets/LostInTheMultiverse.svg'
import Asset_1 from '../../assets/Assets_Lost_In_The_Multiverse_1.png'
import Asset_2 from '../../assets/Assets_Lost_In_The_Multiverse_2.png'
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
            
                
            
                <div><p className='text-[10px] xl:text-[15px] font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font color-span mb-[-10px] xl:mb-[-20px]'>STREAMING - GAMING - GEEK</p><div className='absolute'><img src={Asset_1} alt="Asset Lost In The Multiverse #1" className='z-0 relative w-[80px] left-[200px] top-[50px] xl:w-[180px] xl:left-[340px] xl:top-6 rotate-[340deg]'/></div></div>
                <a className='text-[50px] xl:text-[80px] font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font mb-[-15px] xl:mb-[-25px]'>KYONAX</a>
                <p className='text-[10px] xl:text-[15px] font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font mb-3 tracking-widest'>LOST IN THE MULTIVERSE</p>
                <div className='flex mb-2'><a href='https://kyonax.link/twitter' className='mr-3 hover:text-[#ff007b]'><FaTwitter /></a> <a href='https://www.tiktok.com/@kyonax_multiverse' className='mr-3 hover:text-[#ff007b]'><FaTiktok /></a> <a href="https://kyonax.link/play_youtube" className='mr-3 hover:text-[#ff007b]'><FaYoutube /></a> <a href="https://kyonax.link/instagram" className='mr-3 hover:text-[#ff007b]'><FaInstagram /></a> <a className='hover:text-[#ff007b]' href="https://kyonax.link/twitch"><FaTwitch /></a></div>
                <div className='flex text-[9px] md:text-[12px] xl:text-[14px] text-[#ff007b] justify-center text-center'><a className='text-[9px] mt-[2px] md:mt-1 xl:text-[12px] xl:mt-1'><FaRegArrowAltCircleUp /></a><a className='font-handmade mr-2 ml-2 mb-3 '>Click Aquí</a> <a className='text-[9px] mt-[2px] md:mt-1 xl:text-[12px] xl:mt-1'><FaRegArrowAltCircleUp /></a></div>
                <a className='justify-center text-center mr-2 ml-2 text-[9px] md:text-[11px] xl:text-[14px] mb-6'>Acompaña a Kyonax en esta aventura multiversal y explora mundos cómo nunca antes lo habías hecho, Streams, y contenido digital enfocado al gaming, IRL, reacciones, y la cultura geek. Construyamos la comunidad más fuerte de todo el Multiverso.</a>
                <p className='justify-center text-center text-[9px] md:text-[11px] xl:text-[13px] mb-9'>Contratación &amp; Solicitudes profesionales: <a className='text-[#ff007b] font-black'>contacto@kyonax.com</a></p>
                <a href="https://kyonax.link/discord">
                    <button class="text-[10px] xl:text-[14px] bg-[#ff007b] hover:bg-[#a819eb] text-white font-bold py-2 px-4 border-b-4 border-[#630030] hover:border-[#560D78] rounded">
                        Ingresa a la Comunidad
                    </button>
                </a>
            </div>

            <div className='z-10 mt-[-53px] xl:mt-[-43px] xl:mb-[80px] mx-auto flex flex-col justify-center text-white items-center'>
                <img src={LostInTheMultiverse} alt="Logo Dot Kyo - Developer" className='selected-logo w-[90px] xl:w-[120px] change-svg-color-v2' />
            </div>



        </div>
    )
}

export default Home