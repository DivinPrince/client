'use client'
import Image from 'next/image'
import react from 'react'
import AutoWrite from './AutoWrite'
interface LandingProps { }
const Landing: React.FC<LandingProps> = ({ }) => {
   return (
      <div className='relative bg-[#0d0d0d] p-2 flex items-center justify-between overflow-hidden h-[400px]'>
            <Image src='/images/globe.webp' width={800} height={800} alt='' className='object-contain img scale-50' />
         <h1 className='text-center text-[40px] font-bold absolute top-28 left-8 w-[450px]'><AutoWrite content='Buuy Your Product Here
                On Crpto Technology Center'/></h1>
      </div>
   )
}
export default Landing
