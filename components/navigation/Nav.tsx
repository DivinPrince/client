'use client'
import useRoutes from '@/hooks/useRoutes'
import qs from 'query-string'
import react, { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Separater from '../Separater'
import Checker from '../checker'
import useFilters from '@/hooks/useFilters'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce'
import useCart from '@/hooks/useCart'
import { categories } from '@/constants'
import Link from 'next/link'
interface NavProps { }
const Nav: React.FC<NavProps> = ({ }) => {
   const routes = useRoutes()
   const router = useRouter()
   const pathname = usePathname();
   const filters = useFilters()
   const search = useSearchParams()



   return (
      <div className='w-0 md:w-fit overflow-hidden fixed left-0'>
         <div className='p-3 bg-gray-100 dark:bg-neutral-800/30 mt-2 w-[350px] rounded-r-lg h-[98vh]'>
            <div>
               {routes.map(route => (
                  <NavLink active={route.active} href={route.href} label={route.label} icon={route.icon} key={route.href} />
               ))}
            </div>
            <Separater />
            {/* <h1 className='text-[23px] flex gap-2 font-semibold items-center'>Categories</h1> */}

            <div className='mt-2 flex flex-wrap gap-2 flex-col'>
               {categories.map(category => (
                  <>
                  <p className='text-muted-foreground text-[20px] font-semibold'>
                     <Link href={`/categories/${category.id}`}>{category.name}</Link>
                  </p>
                     <Separater />
                  </>
               ))}
            </div>
         </div>
      </div>
   )
}
export default Nav