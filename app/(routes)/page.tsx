import getProducts from '@/actions/get-products';
import Header from '@/components/Header'
import NoResults from '@/components/Noresult';
import Products from '@/components/Products'
export const revalidate = 0
export default async function Home() {
  const featured = await getProducts({ isFeatured: true });
  if (!featured.length) {
    return <NoResults />
  }
  return (
    <div className='p-3 md:pl-[362px]'>
      <Header />
      <Products title='Featured' data={featured} />
    </div>
  )
}
