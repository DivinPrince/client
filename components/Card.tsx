'use client'
import { cn } from '@/lib/utils'
import react, { useEffect, useState } from 'react'
interface CardProps {
   children?: React.ReactNode
   className?: string
}
const Card: React.FC<CardProps> = ({ children, className }) => {
   const [isMouted, setIsMouted] = useState(false)
   useEffect(() => {
      setIsMouted(true)
   }, [])

   if (!isMouted) {
      return null
   }
   return (
      <div className={cn('flex flex-col bg-gray-100 dark:bg-neutral-800/30 gap-3 p-3 rounded-lg', className)}>
         {children}
      </div>
   )
}
export default Card