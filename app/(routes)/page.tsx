import Header from '@/components/Header'
import getFeatured from '../actions/getFeatured'
import Products from '@/components/Products'

export default async function Home() {
  const featured = await getFeatured()
  return (
    <div className='p-3 md:pl-[362px]'>
      <Header />
      <Products title='Featured' data={featured} />
    </div>
  )
}
