import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Products from '@/components/Products';
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import Container from '@/components/ui/container';
import Image from 'next/image';
import React from 'react'

export const revalidate = 0;
interface Iparams {
   productId: string;
}
const page = async ({ params }: { params: Iparams }) => {
   const product = await getProduct(params.productId)
   const suggestedProducts = await getProducts({
      categoryId: product?.category?.id
   });
   if (!product) {
      return <>No Result</>
   }
  return (
     <div className="">
        <Container>
           <div className="px-4 py-10 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                 <Gallery images={product.images} />
                 <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                  <Info data={product}/>
                 </div>
              </div>
              <hr className="my-10" />
              <Products title="Related Items" data={suggestedProducts} />
           </div>
        </Container>
     </div>  
  )
}

export default page