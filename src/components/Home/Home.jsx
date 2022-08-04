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
            strings: ["el Desarrollo", "las Comunidades", "el Contenido Digital", "los Vídeojuegos", "las Historias", "la Innovación", "el Arte y Diseño"]
        })
    }, [])

    return (
        <div name='home' className='w-full h-screen'>

            {/* Container */}
            <div className='z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
                <p className='text-[12px] sm:text-[20px] '>¡Hola, y Bienvenida/o a mi Universo! Yo soy</p>
                <img src={Logo} alt="Kyonax Logo Large" className='w-[390px] sm:w-[500px] md:w-[600px] change-svg-color' />
                <p className='text-[12px] sm:text-[20px] mt-1'>Una persona apasionada por <span ref={textRef} className='color-span'></span></p>

                <div className={'z-[0] mt-1 grid grid-cols-[40px_minmax(89px,_0fr)_60px_53px] md:grid-cols-[78px_minmax(130px,_0fr)_110px_95px] sm:grid-cols-[58px_minmax(110px,_0fr)_90px_75px] md:mt-3'}>

                    <div>
                        <a href='/#/dot_kyo'>
                            <img src={DotKyo} alt="Logo Dot Kyo - Developer" className='selected-logo mr-0 mt-[7px] sm:mt-[10px] md:mt-[2px] change-svg-color-v2' />
                        </a>
                    </div>

                    <div className='pl-1'>
                        <a href="/#/kyonax_lost_in_the_multiverse">
                            <img src={LostMultiverse} alt="Logo Lost in the Multiverse - Content Creator" className='selected-logo pl-4 mt-[-16px] sm:mt-[-18px] md:mt-[-30px] change-svg-color-v2' />
                        </a>
                    </div>

                    <div>
                        <a href="/#/kyo_nft">
                            <img src={KyoNFT} alt="Logo Kyo NFT - Crypto and NFT expert" className='selected-logo md:mt-[-7px] sm:mt-[2px] flex flex-col opacity-[85.5%]' />
                        </a>
                    </div>

                    <div> <img src={BeatMelody} alt="Logo Beat and Melody - Music" className='selected-logo flex flex-col change-svg-color-v2 ml-1 mt-2 sm:mt-[16px] md:mt-[8px]' /></div>
                </div>

            </div>
            

        </div>
    )
}

export default Home