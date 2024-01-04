import Header from '@/components/Header'
import Nav from '@/components/navigation/Nav'
import Image from 'next/image'
import Products from '@/components/Products'
import getProducts from '@/actions/get-products'
import NoResults from '@/components/Noresult'
export const revalidate = 0

export default async function Home() {
   const data = await getProducts({})
   if (!data.length) {
      return <NoResults />
   }
   return (
      <div className=''>
         <Products title='All Products' data={data} />
      </div>
   )
}
