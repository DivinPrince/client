'use client'

import Separater from "./Separater"

interface FooterProps { }
const Footer: React.FC<FooterProps> = ({ }) => {
   return (
      <>
       {/* 6 33 */}
      <Separater />
      <div className="flex justify-around p-2 flex-wrap">
         <div className="flex flex-col gap-2">
            <div className="relative">
               <p className="text-[20px] font-bold select-none">Our Company</p>
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
               <p className="text-[20px] font-bold select-none">Services</p>
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
               <p className="text-[20px] font-bold select-none">Contact Us</p>
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
                  Copyright © crptotechcenter All Rights Reserved.
               </li>
            </ul>
         </div>
      </div>
      </>
   )
}
export default Footer
