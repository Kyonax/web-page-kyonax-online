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
                    <h1 className="text-[15px] text-left mb-1 text-[#ff7c01]">Roadmap - Metas y Objetivos globales de</h1>
                    <img src={Logo} alt="Kyonax Logo Large" className='w-[400px] change-svg-color' />
                    <h1 className="text-[15px] text-left mt-4 mb-1 text-white">Dale un vistazo global a los objetivos de Kyonax, las metas que se tienen por cumplir, acercandonos a sus dependencias, servicios, y marca en general.</h1>
                    <h1 className="text-[13px] text-left mt-3 text-[#a819eb]">[toda información se encuentra sujeta a cambios]</h1>
                </div>
                <div className="w-full ml-7  lg:w-1/3"></div>
            </div>
            <ScrollBlocks />
        </div>
    );
};

export default Roadmap;
