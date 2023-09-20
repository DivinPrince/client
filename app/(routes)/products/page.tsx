import Header from '@/components/Header'
import Nav from '@/components/navigation/Nav'
import Image from 'next/image'
import Products from '@/components/Products'
import getProducts from '@/actions/get-products'

export default async function Home() {
   const data = await getProducts({})
   return (
      <div className=''>
         <Products title='All Products' data={data} />
      </div>
   )
}
