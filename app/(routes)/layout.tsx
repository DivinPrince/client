import Footer from '@/components/Footer'
import Nav from '@/components/navigation/Nav'
import React from 'react'

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default layout