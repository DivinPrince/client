import Cart from '@/components/Cart'
import { useStateContext } from '@/context/StateContext'
import React from 'react'

const page = async () => {
  return (
    <div className='p-3 pt-3 sm:p-[100px] sm:pt-3'>
      <Cart/>
    </div>
  )
}

export default page