import React from 'react'

import ProductCard from '@/components/ProductCard';
import Separater from '@/components/Separater';
import MobileFilters from './components/mobile-filters';
import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import NoResults from '@/components/Noresult';
interface Iparams {
   categoryId: string;
}
const page = async ({ params }: { params: Iparams }) => {
   const category = await getCategory(params.categoryId)
   const products= await getProducts({categoryId: category.id})
   if (!products.length) {
      return <NoResults />
   }
   return (
      <div>
         <div className='flex justify-between items-center'>
            <h1 className='p-2 text-[23px] flex gap-2 font-semibold items-center'>{category.name}</h1>
            <MobileFilters colors={[{ id: "gh4as3", name: "Pink", value: "pink" }, { id: "gh4asf3", name: "red", value: "red" }]} sizes={[{ id: "gh43", name: "small", value: "Sm" }, { id: "gh43", name: "Large", value: "Lg" }]}/>
         </div>
         <Separater />
         <div className='flex gap-3 flex-wrap'>
            {products.map((product) => (
               <ProductCard product={product} />
            ))
            }
         </div>
      </div>
   )
}

export default page