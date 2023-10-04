'use client'
interface FooterProps { }
const Footer: React.FC<FooterProps> = ({ }) => {
   return (
      <div className="flex justify-around p-4 w-full">
         <div className="flex flex-col gap-2">
            <div className="relative">
               <h1 className="text-[20px] font-bold select-none">Our Company</h1>
               <div className="absolute w-[35px] h-[3px] bg-orange-700 rounded-full"></div>
            </div>
            <ul className="text-muted-foreground mt-4">
               <li>
                  Computer Programing
               </li>
               <li>
                  E-commerce
               </li>
               <li>
                  Online services
               </li>
               <li>
                  Shopping
               </li>
            </ul>
         </div>
         <div className="flex flex-col gap-2">
            <div className="relative">
               <h1 className="text-[20px] font-bold select-none">Services</h1>
               <div className="absolute w-[35px] h-[3px] bg-orange-700 rounded-full"></div>
            </div>
            <ul className="text-muted-foreground mt-4">
               <li>
                  Discount
               </li>
               <li>
                  Payments
               </li>
            </ul>
         </div>
         <div className="flex flex-col gap-2">
            <div className="relative">
               <h1 className="text-[20px] font-bold select-none">Contact Us</h1>
               <div className="absolute w-[35px] h-[3px] bg-orange-700 rounded-full"></div>
            </div>
            <ul className="text-muted-foreground mt-4">
               <li>
                  Rubavu,Gisenyi
               </li>
               <li>
                  0737097715,
                  crptotech@gmail.com
               </li>
               <li>
                  Copyright © Anon All Rights Reserved.
               </li>
            </ul>
         </div>
      </div>
   )
}
export default Footer