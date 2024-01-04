import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Nav from '@/components/navigation/Nav'
import React from 'react'

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='md:pl-[262px]'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout