import React from 'react'
import { FaCheck, FaTwitch, FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaTiktok, FaGithub, FaTools, FaDiscord } from 'react-icons/fa'

const ScrollBlocks = () => {
    return (
        <div className="content-block xs:mt-6">
            <div className="steps-clone">
                <div className="step-block z-50">

                    <div className="blank-block"></div>
                    <div class="bg-[#ff7c01] dot"></div>

                    <div className="content-wrap text-1xl text-[#0F0F0F]">
                        <div className="step-content-block">
                            <div className="step">
                                <div className="text-block">
                                    <div class="label mb-3">01</div>
                                    <div className="label"></div>
                                    <div className="content">
                                        <div className="font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font">
                                            preparacion de marca y herramientas <a className='color-span text-[12px]'>[ en proceso ]</a> 
                                        </div>
                                        <p>

                                            Todo gran proyecto requiere una fase de <strong><em>desarrollo y preparación</em></strong> en dónde se
                                            crean las ideas y los proyectos, en esta fase Kyonax se encarga de conseguir y
                                            crear toda herramienta necesaria para la elaboración y ejecución
                                            de cada uno de ellos.
                                            &zwj;
                                            <br />
                                            &zwj;
                                            <strong>
                                                <p className='font-[1100]'>Desarrollos e Implementaciones de esta fase:</p>
                                            </strong>
                                            <p><strong>・</strong>Creación de las páginas web para cada dependencia</p>
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Kyonax <FaCheck className='ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /> </p>
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Dot Kyo <FaTools className='ml-1 mt-[7px] h-[10px] fill-[#a819eb]' /> <FaCheck className='hidden ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /></p>
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Kyonax lost in the Multiverse <FaTools className='ml-1 mt-[7px] h-[10px] fill-[#a819eb]' /> <FaCheck className='hidden ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /></p>
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Kyo NFT <FaTools className='ml-1 mt-[7px] h-[10px] fill-[#a819eb]' /> <FaCheck className='hidden ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /></p>
                                            <p className='flex'><strong>・</strong>Cuentas Sociales para la Creación de Contenido <FaTools className='ml-1 mt-[7px] h-[10px] fill-[#a819eb]' /> <FaCheck className='hidden ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /></p>
                                            {/*
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Kyonax <a href="https://kyonax.link/twitter"> <FaTwitter className='ml-1 mt-[6px] h-[12px] fill-black' /> </a> <a href="https://kyonax.link/instagram"> <FaInstagram className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/youtube"> <FaYoutube className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/facebook"> <FaFacebook className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/tiktok"> <FaTiktok className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/linkeedin"> <FaLinkedin className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <FaCheck className='ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /> </p>
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Dot Kyo <a href="https://kyonax.link/twitter"> <FaTwitter className='ml-1 mt-[6px] h-[12px] fill-black' /> </a> <a href="https://kyonax.link/youtube"> <FaYoutube className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/facebook"> <FaFacebook className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/tiktok_dotkyo"> <FaTiktok className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/linkeedin"> <FaLinkedin className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/github"> <FaGithub className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <FaCheck className='ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /> </p>
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Kyonax lost in the Multiverse <a href="https://kyonax.link/twitter"> <FaTwitter className='ml-1 mt-[6px] h-[12px] fill-black' /> </a> <a href="https://kyonax.link/play_youtube"> <FaYoutube className='ml-1 mt-[6px] h-[12px] fill-black' />  </a>  <a href="https://kyonax.link/tiktok_multiverse"> <FaTiktok className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <a href="https://kyonax.link/twitch"> <FaTwitch className='ml-1 mt-[6px] h-[12px] fill-black' />  </a> <FaCheck className='ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /> </p>
    <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Kyo NFT <a href="https://kyonax.link/twitter_nft"> <FaTwitter className='ml-1 mt-[6px] h-[12px] fill-black' /> </a>  <a href="https://kyonax.link/tiktok_nft"> <FaTiktok className='ml-1 mt-[6px] h-[12px] fill-black' />  </a>  <FaCheck className='ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /> </p>                                            */}
                                            <p><strong>・</strong>Plataformas de Comunidad</p>                                                                                        
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Comunidad Discord <a href="https://kyonax.link/discord"> <FaDiscord className='ml-1 mt-[6px] h-[12px] fill-black' /> </a> <FaTools className='ml-1 mt-[7px] h-[10px] fill-[#a819eb]' /> <FaCheck className='hidden ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /> </p>
                                            {/*
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Estructura y nueva temática para el Servidor</p>
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Acceso de Comunidad — Dependencias —</p>
                                            <p className='flex'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Beneficios y Recompensas a miembros</p>
<p className='flex'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong className='mr-2'>- </strong>Desarrollo de Bot Automatizado</p>*/}
                                            <p className='flex mb-9'><strong>・</strong>Otras implementaciones técnicas <FaTools className='ml-1 mt-[7px] h-[10px] fill-[#a819eb]' /> <FaCheck className='hidden ml-1 mt-[7px] h-[10px] fill-[#ff7c01]' /> </p>     
                                            <a href="https://kyonax.link/docs_roadmap" className='color-span cursor-pointer'>[más información]</a> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


                <div className="step-block z-40">

                    <div className="scoll-wrap z-0">
                        <div
                            className="scroll-animate"></div>
                        <div className="scroll-base"></div>
                    </div>

                    <div className="content-wrap text-1xl text-[#0F0F0F] z-10">
                        <div className="step-content-block opacity-[70%]">
                            <div className="step">
                                <div className="text-block">
                                    <div class="label">02</div>
                                    <div className="label mb-3"></div>
                                    <div className="content">
                                        <div className="font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font">
                                            CREACION DE CONTENIDO preparacion de marca y herramientas <a className='color-span text-[12px]'>[ JUNIO/03/2022 ]</a> 
                                        </div>
                                        <p>
                                            
                                            La manera en cómo se comparte y socializa la información es ahora por medio
                                            de la Creación de Contenido, debiéndose a la rapidez y facilidad de consumo.
                                            &zwj;
                                            <br/>
                                            <br/>
                                            
                                            Las Redes Sociales son ahora nuestro lugar de aprendizaje y es por eso que
                                            Kyonax se enfocará principalmente en brindar Contenido de Calidad enfocado 
                                            a informar y entretener, enfocado a cada una de las Dependencias de la
                                            marca (Kyonax, DotKyo, Lost in the Multiverse, KyoNFT)                                    
                                            &zwj;
                                            <br />
                                            <br />                                            
                                            <a href="https://kyonax.link/docs_roadmap" className='color-span cursor-pointer'>[más información]</a> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-[#ff007b] dot z-0"></div>
                    <div className="blank-block"></div>


                </div>

                <div className="step-block">

                <div className="blank-block"></div>
                <div class="bg-[#a819eb] dot"></div>
                    

                    <div className="scoll-wrap">
                        <div
                            className="scroll-animate-2"></div>
                        <div className="scroll-base"></div>
                    </div>

                    <div className="content-wrap text-1xl text-[#0F0F0F]">
                        <div className="step-content-block opacity-[70%]">
                            <div className="step">
                                <div className="text-block">
                                    <div class="label">03</div>
                                    <div className="label mb-3"></div>
                                    <div className="content">
                                        <div className="font-sans font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont akira-font">
                                            Equipo Kyonax - Organizacion decentralizada <a className='color-span text-[12px]'>[ TBA ]</a> 
                                        </div>
                                        <p>
                                            
                                            Para cumplir con el objetivo de Kyonax, y ser una idea de cambio novedosa
                                            para los ecosistemas acutales digitales más importantes de nuestra humanidad, 
                                            se necesita la mano de una Comunidad unida y fuerte, con una misma visión, en 
                                            busca de un bien común, usando las nuevas tecnologías para lograr todo objetivo.                                                                           
                                            &zwj;                                            
                                            <br />
                                            <br />
                                            <a href="https://kyonax.link/docs_roadmap" className='color-span cursor-pointer'>[más información]</a> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    


                </div>

            </div>
        </div>
    )
}

export default ScrollBlocks