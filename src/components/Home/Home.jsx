import React from 'react'
import {useEffect, useRef} from 'react'
import Trippy from '../../assets/WallpaperWebPage.png'
import './home.css'
import Logo from '../../assets/LOGO_KYONAX_md.svg'
import DotKyo from '../../assets/dotkyo_lg.svg'
import BeatMelody from '../../assets/beatmelody_large.svg'
import LostMultiverse from '../../assets/LostInTheMultiverse.svg'
import KyoNFT from '../../assets/md.svg'
import { init } from 'ityped'

const Home = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor: false,
            strings: ["el Desarrollo", "las Comunidades Digitales", "la Creación de Contenido", "los Vídeojuegos", "las Historias", "las Ideas Innovadoras"]
        })
    },[])

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
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
                <p className='text-1xl md:text-2xl '>¡Hola, y Bienvenida/o a mi Universo! Yo soy</p>
                <img src={Logo} alt="Kyonax Logo Large" className='w-[500px] md:w-[600px] change-svg-color'/>
                <p className='text-1xl md:text-2xl mt-1'>Una persona apasionada por <span ref={textRef} className='color-span'></span></p>
                <div> <img src={DotKyo} alt="Logo Dot Kyo - Developer" className='mt-2 w-[70px] change-svg-color-v2'/>  </div>
            </div>

            
            
        </div>
    )
}

export default Home