import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
   title: 'Crpto • Tech | Products',
   description: 'Marketplace For Tech Products',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <div className='p-3 md:pl-[262px]'>
         <Header />
         {children}
      </div>
   )
}