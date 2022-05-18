import React from 'react'

const Footer = () => {
    return (
        <div className='text-[10px] md:text-[14px] fixed bottom-0 w-full h-[80px] flex flex-wrap items-center bg-[#0F0F0F] text-[#878787]'>
            
            <div className='flex flex-wrap w-full text-center lg:w-1/3 '>
            <p className='w-1/4'> <a href="/terms">TÉRMINOS</a> </p>            
            <p className='w-1/4'> <a href="/privacidad">PRIVACIDAD</a> </p>
            <p className='w-1/4'> <a href="mailto:support@kyonax.com">SOPORTE</a> </p>
            <p className='w-1/4'> <a href="mailto:contacto@kyonax.com">CONTACTO</a> </p>
            </div>            

            <div className='w-full lg:w-1/3'></div>            

            <div className='w-full text-right p-6 lg:w-1/3'>
            <a href='https://twitter.com/kyonax_on' target="_blank"><p>© 2022 KYONAX - DOT KYO DEVELOPER</p></a>
            </div>
            
            
        </div>
    )
}

export default Footer