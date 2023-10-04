import getDistricts from '@/actions/get-districts'
import Cart from '@/components/Cart'
import { useStateContext } from '@/context/StateContext'
import React from 'react'

const page = async () => {
  const districts = await getDistricts()
  return (
    <div className='p-3 pt-3 sm:p-[100px] sm:pt-3'>
      <Cart districts={districts}/>
    </div>
  )
}

export default page