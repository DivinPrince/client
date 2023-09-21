import React from 'react'
import Card from './Card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import useCart from '@/hooks/use-cart'
import Currency from './ui/currency'
import Separater from './Separater'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import axios from 'axios'

const OrderInfo = () => {
   const items = useCart((state) => state.items)
   const totalPrice = items.reduce((total, item) => {
      return total + (Number(item.price) * Number(item.quantity))
   }, 0);
   const onCheckout = async () => {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
         productIds: items.map((item) => item.id)
      });
   }

   return (
      <Card className='w-full lg:w-[400px]'>
         <h1 className='text-3xl font-semibold'>
            Order Information
         </h1>
         <div className='flex flex-col justify-between h-full'>

            <form action="" className='flex flex-col gap-2'>
               <Input placeholder='Your Name' disabled={false} id='' className='bg-transparent' />
               <div className='flex gap-2'>
                  {/* <Input placeholder='District' disabled={false} id='' className='bg-transparent' /> */}
                  <Select>
                        <SelectTrigger className='bg-transparent'>
                           <SelectValue placeholder="Select a District" />
                        </SelectTrigger>
                     <SelectContent className='bg-[#121212]'>
                           <SelectItem value='Rubavu'>Rubavu</SelectItem>
                           <SelectItem value='Kigali'>Kigali</SelectItem>
                        <SelectItem value='Karongi'>Karongi</SelectItem>
                     </SelectContent>
                  </Select>
                  <Input placeholder='Post Code' disabled={false} id='' className='bg-transparent' />
               </div>
               <Input placeholder='Phone Number' disabled={false} id='' className='bg-transparent' />
               <Button onClick={onCheckout} className='w-full'>Place Order</Button>
            </form>
            <div>

               <Separater />
               <div className='flex justify-between items-center'>
                  <h1 className=''>Order Total</h1>
                  <p>
                     <Currency value={totalPrice} />
                  </p>
               </div>
               <Separater />
               <div className='flex justify-between items-center'>
                  <h1 className=''>Shipping</h1>
                  <p>
                     <Currency value={15000} />
                  </p>
               </div>
               <Separater />
               <div className='flex justify-between items-center'>
                  <h1 className=''>Total</h1>
                  <p>
                     <Currency value={totalPrice + 15000} />
                  </p>
               </div>
            </div>
         </div>
      </Card>
   )
}

export default OrderInfo