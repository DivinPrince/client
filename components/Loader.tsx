import Image from 'next/image'
import React from 'react'

const Loader = () => {
   return (
      <div className='transition-all fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-black z-50'>
         <div className='animate-bounce'>
            <Image src='/logo.png' alt='logo' width={60} height={40} />
         </div>
      </div>
   )
}

export default Loader