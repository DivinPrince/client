import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

const useCart = () =>{
   const path = usePathname()
   const isOpen = useMemo(()=> path === 'cart' , [path])
   
   return useMemo(()=>({
      isOpen
   }),[isOpen])
}

export default useCart