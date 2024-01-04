'use client'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import useCart from '@/hooks/use-cart'
import Currency from './ui/currency'
import Separater from './Separater'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import toast from 'react-hot-toast'

const formSchema = z.object({
   phoneNumber: z.string().min(10),
   name: z.string().min(2),
   province: z.string().min(2),
   district: z.string().min(2),
   sector: z.string().min(2),
   cell: z.string().min(2),
   village: z.string().min(2),
});

type OrderFormValues = z.infer<typeof formSchema>
const OrderInfo = ({ }) => {
   const items = useCart((state) => state.items)
   const cart = useCart()
   const totalPrice = items.reduce((total, item) => {
      return total + (Number(item.price) * Number(item.quantity))
   }, 0);
   const form = useForm<OrderFormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: '',
         phoneNumber: '',
         province: '',
         district: '',
         cell: '',
         village: '',
      }
   });
   const onSubmit = async (data: OrderFormValues) => {
         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order`, JSON.stringify({
            productIds: items.map((item) => item.id),
            quantities: items.map((item) => item.quantity),
            info: {
               name: data.name,
               phoneNumber: data.phoneNumber,
               province: data.province,
               district: data.district,
               cell: data.cell,
               village: data.village,
               total: totalPrice + 15000
            }
         }))
         cart.removeAll()
         form.reset()
         toast('Placed the Order it will be delivered as soon as possible')
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
                     name="phoneNumber"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input placeholder="Phone Number" {...field} className='bg-transparent' />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="province"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input placeholder="Your province / Intara" {...field} className='bg-transparent' />
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
                           <FormControl>
                              <Input placeholder="Your district / Akarere" {...field} className='bg-transparent' />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="sector"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input placeholder="Your sector / Umurenge" {...field} className='bg-transparent' />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="cell"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input placeholder="Your cell / Akagari" {...field} className='bg-transparent' />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="village"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input placeholder="Your village / Umudugudu" {...field} className='bg-transparent' />
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
                  <h2 className=''>Order Total</h2>
                  <p>
                     <Currency value={totalPrice} />
                  </p>
               </div>
               <Separater />
               <div className='flex justify-between items-center'>
                  <h2 className=''>Shipping</h2>
                  <p>
                     <Currency value={15000} />
                  </p>
               </div>
               <Separater />
               <div className='flex justify-between items-center'>
                  <h2 className=''>Total</h2>
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
