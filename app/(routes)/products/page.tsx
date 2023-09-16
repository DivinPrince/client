import Header from '@/components/Header'
import Nav from '@/components/navigation/Nav'
import Image from 'next/image'
import getProducts from '@/app/actions/getProducts'
import Products from '@/components/Products'

export default async function Home() {
   const featured = await getProducts()
   return (
      <div className=''>
         <Products title='All Products' data={featured} />
      </div>
   )
}
