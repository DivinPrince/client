'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {
   useEffect(() => {
      console.error(error)
   }, [error])

   return (
      <div className='text-center'>
         <h2 className='text-muted-foreground'>Something went wrong!</h2>
         <Button
            variant='ghost'
            className='rounded-full'
            onClick={
               () => reset()
            }
         >
            Try again
         </Button>
      </div>
   )
}