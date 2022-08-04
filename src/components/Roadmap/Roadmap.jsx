import React from "react";
import ScrollBlocks from "./ScrollBlocks"
import Logo from '../../assets/LOGO_KYONAX_md.svg'
import "./roadmap.css";


const Roadmap = () => {
    return (
        <div className="w-full h-screen text-white">
            <div className="flex flex-wrap w-full">
                <div className="w-full h-[80px]"></div>
                <div className="w-full ml-7  lg:w-1/3"></div>
                <div className="w-full ml-7 mr-7  lg:w-1/3 mt-10 text-center justify-center items-center">
                    <h1 className="text-[12px] xl:text-[15px] text-left mb-1 text-[#ff7c01]">Roadmap - Metas y Objetivos globales de</h1>
                    <img src={Logo} alt="Kyonax Logo Large" className='w-[300px] sm:w-[400px] change-svg-color' />
                    <h1 className="text-[12px] xl:text-[15px] text-left mt-4 mb-1 text-white">Sigue el proceso y el desarrollo de cada uno de los Objetivos, y Metas a largo plazo de Kyonax.
                    &zwj;
                    <br />
                    <br />
                    Construyamos una comunidad fuerte, y refresquemos el mundo de la Creación de Contenido, con nuevas ideas, creatividad y pasión.
                    </h1>                    
                    <h1 className="text-[11px] sm:text-[13px] text-left mb-6 mt-3 md:mb-3 text-[#a819eb]">[toda información se encuentra sujeta a cambios]</h1>
                </div>
                <div className="w-full ml-7 lg:w-1/3"></div>
            </div>
            <ScrollBlocks/>
        </div>
    );
};

export default Roadmap;
