import getProductById from '@/app/actions/getProductById';
import Image from 'next/image';
import React from 'react'
interface Iparams {
   productId: string;
}
const page = async ({ params }: { params: Iparams }) => {
   const currentProduct = await getProductById(params.productId)
  return (
     <div className=''>
      {currentProduct?.details}
     </div>
  )
}

export default page