import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import Logo from '../../assets/LOGO_KYONAX_md.svg'
import DotKyo from '../../assets/dotkyo_lg.svg'
import BeatMelody from '../../assets/beatmelody_large.svg'
import LostMultiverse from '../../assets/LostInTheMultiverse.svg'
import KyoNFT from '../../assets/md.svg'
import './home.css'
import { init } from 'ityped'

const Home = () => {    

    const textRef = useRef();        

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ["el Desarrollo", "las Comunidades", "el Contenido Digital", "los Vídeojuegos", "las Historias", "las Ideas Innovadoras", "el Arte y Diseño"]
        })
    }, [])

    return (
        <div name='home' className='w-full h-screen'>
            {/* 
            
            <div className='max-w-[100%] md:max-w-[65%] mx-auto flex flex-col justify-center h-full items-center'>
                <div className='container'>
                    <img src={Trippy} alt="Trippy Wallpaper" className='mt-[100px]' />
                    <div className='square absolute font-bold text-4xl'>
                        <p className=''>HOLA SOY</p>
                        <img src={Logo} alt="Logo Full Kyonax" className=' md:max-w-[90%]'/>
                    </div>
                </div>
            </div>
            
            */}

            {/* Container */}
            <div className='z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
                <p className='text-1xl md:text-2xl '>¡Hola, y Bienvenida/o a mi Universo! Yo soy</p>
                <img src={Logo} alt="Kyonax Logo Large" className='w-[500px] md:w-[600px] change-svg-color' />
                <p className='text-1xl md:text-2xl mt-1'>Una persona apasionada por <span ref={textRef} className='color-span'></span></p>

                <div className={'z-[0] mt-1 grid grid-cols-[55px_minmax(100px,_0fr)_80px_65px] md:grid-cols-[75px_minmax(120px,_0fr)_100px_85px] md:mt-3'}>

                    <div>
                        <a href='/dot_kyo' target="_blank">
                        <img src={DotKyo} alt="Logo Dot Kyo - Developer" className='selected-logo mr-1 mt-2 change-svg-color-v2'/>
                        </a>
                    </div>

                    <div className='pl-1'><img src={LostMultiverse} alt="Logo Lost in the Multiverse - Content Creator" className='selected-logo pl-4 mt-[-16px] md:mt-[-20px] change-svg-color-v2'/>  </div>

                    <div> <img src={KyoNFT} alt="Logo Kyo NFT - Crypto and NFT expert" className='selected-logo flex flex-col opacity-[85.5%]' /> </div>

                    <div> <img src={BeatMelody} alt="Logo Beat and Melody - Music" className='selected-logo flex flex-col change-svg-color-v2 mt-3' /></div>
                </div>

            </div>



        </div>
    )
}

export default Home