'use client'
import React, { useEffect } from 'react'
import Card from './Card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import useCart from '@/hooks/use-cart'
import Currency from './ui/currency'
import Separater from './Separater'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import axios from 'axios'
import { District } from '@/types'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import toast from 'react-hot-toast'

const formSchema = z.object({
   phoneNumber: z.string().min(10),
   name: z.string().min(2),
   district: z.string().min(2),
});

type OrderFormValues = z.infer<typeof formSchema>
interface orderProps {
   districts: District[]
}
const OrderInfo: React.FC<orderProps> = ({ districts }) => {
   const items = useCart((state) => state.items)
   const totalPrice = items.reduce((total, item) => {
      return total + (Number(item.price) * Number(item.quantity))
   }, 0);
   const form = useForm<OrderFormValues>({
      resolver: zodResolver(formSchema),
   });
   const onSubmit = async (data: OrderFormValues) => {
      try {
         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id),
            info: {
               name: data.name,
               phoneNumber: data.phoneNumber,
               district: data.district
            }
         });

      } catch (error: any) {
         toast.error('Something went wrong.');
      } finally {
      }
   };

   return (
      <Card className='w-full lg:w-[400px]'>
         <h1 className='text-3xl font-semibold'>
            Order Information
         </h1>
         <div className='flex flex-col justify-between h-full'>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input placeholder="Your name" {...field} className='bg-transparent' />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="district"
                     render={({ field }) => (
                        <FormItem>
                           <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                              <FormControl>
                                 <SelectTrigger className='bg-transparent'>
                                    <SelectValue defaultValue={field.value} placeholder="Select a District" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 {districts.map((district) => (
                                    <SelectItem key={district.id} value={district.id}>{district.name}</SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="phoneNumber"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input placeholder="Phone Number" {...field} className='bg-transparent'/>
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button className='w-full'>Place Order</Button>
               </form>
            </Form>
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