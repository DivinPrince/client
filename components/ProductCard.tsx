'use client'
import { useRouter } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

import { Product } from '@/types'
import Card from './Card'
import { Button } from './ui/button'
import Currency from './ui/currency'
import useCart from '@/hooks/use-cart'

interface ProductCardProps {
   product: Product
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
   const cart = useCart()
   const currentItems = cart.items
   const existingItem = currentItems.find((item) => item.id === product.id);
   
   const router = useRouter()
   return (
      <Card className='relative w-full md:w-[250px]'>
         {existingItem &&(
            <div className='p-2 flex justify-center items-center font-semibold absolute w-32 h-10 left-0 top-0 bg-white/5 backdrop-blur-lg cursor-default select-none rounded-e-lg'>
               Added To Cart
            </div>
         )}
         <Button className='absolute right-0 mr-3' variant='ghost' onClick={()=>{cart.addItem(product)}}>
            <ShoppingCart/>
         </Button>
         <div className='bg-white/5 rounded-lg cursor-pointer' onClick={() => router.push(`/products/${product.id}`)}>
            <Image src={product.images[0].url} alt={`product ${product.name}`} width={100} height={100} className='w-full object-contain h-[200px]' />
         </div>
         <h1 className='font-semibold'>{product.category.name}</h1>
         <p><span className='text-muted-foreground'>{product.name}</span> <span className='text-orange-500'>•</span> <Currency value={product.price}/></p>

      </Card>
   )
}
export default ProductCard