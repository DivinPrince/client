'use client'
import useFilters from '@/hooks/useFilters'
import react from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
interface ControlsProps { }
const Controls: React.FC<ControlsProps> = ({ }) => {
   const filters = useFilters()
   return (
      <div className='flex justify-center gap-3'>
         <Select>
            <SelectTrigger className="w-[180px]">
               <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
               {filters.map(filter => (
                  <SelectItem value={filter.key} key={filter.label}>{filter.label}</SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   )
}
export default Controls