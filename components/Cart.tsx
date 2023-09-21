'use client'
import { useStateContext } from '@/context/StateContext'
import { Product } from '@/types'
import react, { useEffect, useMemo, useState } from 'react'
import Card from './Card'
import CartProduct from './CartProduct'
import { ArrowBigLeft, ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { Separator } from '@radix-ui/react-select'
import Separater from './Separater'
import Currency from './ui/currency'
import { Input } from './ui/input'
import useCart from '@/hooks/use-cart'
import OrderInfo from './OrderInfo'
// import Input from './Input'
interface CartProps {
}
const Cart: React.FC<CartProps> = ({ }) => {
   const [isMouted, setIsMouted] = useState(false)
   useEffect(() => {
      setIsMouted(true)
   }, [])

   const cart = useCart()
   const cartItems = cart.items
   const router = useRouter()

   if (!isMouted) {
      return null
   }
   
   return (
      <div className='flex gap-3 flex-wrap'>
         {cartItems.length ? (
            <>
               <Card className='flex-1 flex flex-col gap-3'>
                  <div className='flex justify-between items-center'>
                     <div>
                        <Button variant='ghost' onClick={() => router.push('/products')}>
                           <ArrowBigLeft />
                           Continue Browsing
                        </Button>
                     </div>
                     <h1 className='text-lg font-semibold'>Your Cart <span className='text-orange-500'>•</span> {cart.items.length}</h1>
                  </div>
                  <div className='flex justify-between text-gray-500 font-semibold text-base'>
                     <div className='w-fit sm:w-[150px] text-center'>Product</div>
                     <div className='w-fit sm:w-[150px] text-center'>Quantity</div>
                     <div className='w-fit sm:w-[150px] text-center'>Price</div>
                     <div className='w-fit sm:w-[150px] text-center'>Remove</div>
                  </div>
                  <div></div>
                  {cartItems.map((item) => (
                     <CartProduct item={item} key={item.id}/>
                  ))}
               </Card>
               <OrderInfo />
            </>

         ) : (
            <Card className='w-full'>
               <div>
                  <Button variant='ghost' onClick={() => router.push('/products')}>
                     <ArrowBigLeft />
                     Continue Browsing
                  </Button>
               </div>
               <div className='flex justify-center flex-col items-center text-base gap-3'>
                  <div className='font-bold'>Your Cart is Empty</div>
                  <ShoppingBag className='text-center' size={50} />
               </div>
            </Card>
         )}
      </div>
   )
}
export default Cart