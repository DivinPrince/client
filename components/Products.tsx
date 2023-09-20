import { Product } from '@/types'
import react from 'react'
import ProductCard from './ProductCard'
import Separater from './Separater'
import NoResults from './Noresult'
interface ProductsProps {
   data: Product[],
   title: string
}
const Products: React.FC<ProductsProps> = ({ data,title }) => {
   return (
      <div>
         {data.length === 0 && <NoResults />}
         <h1 className='p-2 text-[23px] flex gap-2 font-semibold items-center'>{title}</h1>
         <Separater />
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map(product => (
               <ProductCard product={product} />
            ))
            }
         </div>
      </div>
   )
}
export default Products