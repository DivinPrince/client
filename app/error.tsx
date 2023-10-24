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
      <div className='h-full flex justify-center flex-col items-center gap-2.5'>
         <h2 className='text-muted-foreground'>Something went wrong!</h2>
         <Button
            variant='secondary'
            className='rounded-full text-blue-400'
            onClick={
               () => reset()
            }
         >
            Try again
         </Button>
      </div>
   )
}