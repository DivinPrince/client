import Nav from '@/components/navigation/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { StateContext } from '@/context/StateContext.jsx'
import { ToastProvider } from '@/providers/toast-provider'

export const metadata: Metadata = {
  title: 'Crpto • Tech',
  description: 'Marketplace For Tech Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark'>    
          <StateContext>
            <ToastProvider />
            {children}
          </StateContext>
      </body>
    </html>
  )
}
