import getProducts from '@/actions/get-products';
import Header from '@/components/Header'
import Products from '@/components/Products'

export default async function Home() {
  const featured = await getProducts({ isFeatured: true });
  return (
    <div className='p-3 md:pl-[362px]'>
      <Header />
      <Products title='Featured' data={featured} />
    </div>
  )
}
