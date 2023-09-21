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
         <div className="flex flex-wrap gap-3">
            {data.map(product => (
               <ProductCard product={product} />
            ))
            }
         </div>
      </div>
   )
}
export default Products