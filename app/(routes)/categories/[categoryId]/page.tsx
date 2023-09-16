import getCategory from '@/app/actions/getCategory';
import getProductByCategory from '@/app/actions/getProductByCategory';
import getProductById from '@/app/actions/getProductById';
import ProductCard from '@/components/ProductCard';
import Products from '@/components/Products';
import Separater from '@/components/Separater';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import Filter from './components/filter';
interface Iparams {
   categoryId: string;
}
const page = async ({ params }: { params: Iparams }) => {
   const category = await getCategory(params.categoryId)
   if (!category) {
      return <div className='h-full text-center font-semibold text-muted-foreground'>No Results</div>
   }
   const products = await getProductByCategory(category.name)
   console.log(products);
   return (
      <div>
         <div className='flex justify-between items-center'>
            <h1 className='p-2 text-[23px] flex gap-2 font-semibold items-center'>{category.name}</h1>
            <Button className='flex items-center gap-2 rounded-full'>
               Filter
               <Plus />
            </Button>
         </div>
         <Separater />
         <div className='flex gap-3 flex-wrap'>
            {products.map(product => (
               <ProductCard product={product} />
            ))
            }
         </div>
         {/* <Filter data={products}/> */}
      </div>
   )
}

export default page