import Nav from '@/components/navigation/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { StateContext } from '@/context/StateContext.jsx'
import { ToastProvider } from '@/providers/toast-provider'
import AuthContext from '@/context/AuthContext'

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
        <AuthContext>
          <StateContext>
            <ToastProvider />
            {children}
          </StateContext>
        </AuthContext>
      </body>
    </html>
  )
}
