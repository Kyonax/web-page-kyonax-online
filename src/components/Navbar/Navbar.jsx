import React, { useState } from 'react'
import Logo from '../../assets/LOGO KIONAX-14_White.png'
import './navbar.css'
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    const [depen, setDepen] = useState(false)
    const handleClickOp = ()  => setDepen(!depen)

    return (
        <div className='z-[40] fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0F0F0F] text-white'>
            <div className='justify-center items-center'>
                <a href="/" ><img src={Logo} alt="Logo Image" className='fill-white w-[35px] md:w-[40px] ml-[40%] md:ml-[60%] mt-[-4px]' /></a>
            </div>
            {
                /**
                * #ff7c01 7.13%,
                * #ff007b 48.99%,
                * #a819eb 84.14%
                */
            }

            {/* Menu */}
            <ul className='hidden md:flex mr-[3%] font-thin text-sm'>
                <li><a href="/roadmap">ROADMAP</a></li>
                <li><a href="/acerca_de_kyonax">ACERCA DE</a></li>
                <li className='relative'><a onClick={handleClickOp}>DEPENDENCIAS</a>
                    <div className={!depen ? 'hidden' : 'absolute font-medium text-black bg-white right-0 rounded-md p-2 mt-2'}>
                        <ul className='space-y-2 md:w-48'>
                            <li>
                                <a href="/dot_kyo" className='mt-1 flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-[#ff7c01]'>DOT KYO - PAGE</a>
                            </li>
                            <li >
                                <a href="/kyonax_lost_in_the_multiverse" className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-[#ff007b]'>LOST IN THE MULTIVERSE</a>
                            </li>
                            <li >
                                <a href="/kyo_nft" className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-[#a819eb]'>KYO NFT - PAGE</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <div className='hidden md:flex justify-center items-center'>
                    <li> <a href="https://www.linkedin.com/in/kyonax/">
                        <FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/kyonax_on">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/kyonax_on/">
                            <FaInstagram />
                        </a>
                    </li>
                </div>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'md:hidden absolute top-[80px] left-0 w-full h-screen bg-[#0F0F0F] bg-opacity-95 flex flex-col justify-center items-center font-thin text-sm z-40'}>

                <li className='py-3 text-1xl'><a href="/roadmap">ROADMAP</a></li>
                <li className='py-3 text-1x1'><a href="/acerca_de_kyonax">ACERCA DE</a></li>
                <li className='py-3 block justify-center text-center w-full'><a onClick={handleClickOp}>DEPENDENCIAS</a>
                    <div className={!depen ? 'hidden' : 'font-medium text-black bg-white center-0 justify-center text-center rounded-md p-2 mt-2'}>
                        <ul className='space-y-2 w-full'>
                            <li>
                                <a href="/dot_kyo" className='mt-1 flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-[#ff7c01]'>DOT KYO - PAGE</a>
                            </li>
                            <li >
                                <a href="/kyonax_lost_in_the_multiverse" className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-[#ff007b]'>LOST IN THE MULTIVERSE</a>
                            </li>
                            <li >
                                <a href="/kyo_nft" className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-[#a819eb]'>KYO NFT - PAGE</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <div className='py-12 flex justify-center items-center'>
                    <li> <a href="https://www.linkedin.com/in/kyonax/">
                        <FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/kyonax_on">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/kyonax_on/">
                            <FaInstagram />
                        </a>
                    </li>
                </div>
            </ul>

        </div>
    )

}

export default Navbar