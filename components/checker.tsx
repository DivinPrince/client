'use client'
import react from 'react'
import { Checkbox } from './ui/checkbox';
interface CheckerProps {
   label: string;
   checked: boolean;
   onClick?: ()=>void;
}
const Checker: React.FC<CheckerProps> = ({ label, checked, onClick }) => {
   return (
      <div className='p-2 border rounded-lg cursor-pointer' onClick={onClick}>
         <Checkbox checked={checked}/>
         <p className='text-[15px]'>{label}</p>
      </div>
   )
}
export default Checker