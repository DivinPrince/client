import Footer from '@/components/Footer'
import Nav from '@/components/navigation/Nav'
import React from 'react'

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex'>
      <Nav />
      <div className='ml-[240px]'>
      {children}
      <Footer />
      </div>
    </div>
  )
}

export default layout