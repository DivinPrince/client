'use client'
import Image from 'next/image'
import react from 'react'
import AutoWrite from './AutoWrite'
import { SignIn, SignUp } from '@clerk/nextjs'
import Form from './Form'
interface LandingProps { }
const Landing: React.FC<LandingProps> = ({ }) => {
   return (
      <div className='relative bg-[#0d0d0d] p-2 flex items-center justify-between'>
            <Image src='/images/globe.webp' width={400} height={400} alt='' className='object-contain img' />
         <h1 className='text-center text-[30px] font-bold absolute top-28 left-2 w-[400px]'><AutoWrite content='Buy Your Product Here
                On Crpto Technology Center'/></h1>
      <Form />
      </div>
   )
}
export default Landing