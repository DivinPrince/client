import { cn } from '@/lib/utils'
interface CardProps {
   children?: React.ReactNode
   className?: string
}
const Card: React.FC<CardProps> = ({ children, className }) => {
   return (
      <div className={cn('flex flex-col bg-gray-100 dark:bg-neutral-800/30 gap-3 p-3 rounded-lg', className)}>
         {children}
      </div>
   )
}
export default Card