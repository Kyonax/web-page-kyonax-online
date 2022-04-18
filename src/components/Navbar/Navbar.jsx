import React, { useState } from 'react'
import Logo from '../../assets/LOGO KIONAX-14_White.png'
import './navbar.css'
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0F0F0F] text-white'>
            <div className='justify-center items-center'>
                <img src={Logo} alt="Logo Image" className='fill-white w-[45px] ml-[60%] mt-[-8px]' />
            </div>

            {/* Menu */}


            <ul className='hidden md:flex mr-[3%] font-thin text-sm'>
                <li>ACERCA DE</li>
                <li>SERVICIOS</li>
                <li>CONTACTO</li>
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
            <ul className={!nav ? 'hidden' : 'md:hidden absolute top-[80px] left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col justify-center items-center font-thin text-sm'}>

                <li className='py-3 text-1x1'>ACERCA DE</li>
                <li className='py-3 text-1xl'>SERVICIOS</li>
                <li className='py-3 text-1xl'>CONTACTO</li>
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
