import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import Link from 'next/link';
import { cn } from "@/lib/utils"
import react from 'react'
interface NavLinkProps {
   label: string;
   active: boolean;
   href: string
   icon: any
}
const NavLink: React.FC<NavLinkProps> = ({ icon: Icon, label, active, href }) => {
   return (
      <Link href={href} className={cn(
         active ? 'text-black dark:text-white' : 'text-muted-foreground'
      )}>
         <div className='p-2 text-[20px] flex gap-2 font-semibold items-center'>
            <Icon />
            {label}
         </div>
      </Link>
   )
}
export default NavLink