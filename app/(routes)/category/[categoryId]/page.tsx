import React from 'react'

import ProductCard from '@/components/ProductCard';
import Separater from '@/components/Separater';
import MobileFilters from './components/mobile-filters';
import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import NoResults from '@/components/Noresult';
import getSizes from '@/actions/get-sizes';
import getColors from '@/actions/get-colors';
interface Iparams {
   params: {
      categoryId: string;
   },
   searchParams: {
      colorId: string;
      sizeId: string;
   }
}
const page: React.FC<Iparams> = async ({ params, searchParams }) => {
   const products = await getProducts({
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
      sizeId: searchParams.sizeId,
   });
   const sizes = await getSizes();
   const colors = await getColors();
   const category = await getCategory(params.categoryId);
   if (!products.length) {
      return <NoResults />
   }
   return (
      <div>
         <div className='flex justify-between items-center'>
            <h1 className='p-2 text-[23px] flex gap-2 font-semibold items-center'>{category.name}</h1>
            <MobileFilters sizes={sizes} colors={colors} />
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