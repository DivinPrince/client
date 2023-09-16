import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import {AiFillDashboard, AiFillHome, AiFillPayCircle, AiOutlineBarChart} from 'react-icons/ai'

const useRoutes = () => {
  const params = useParams();
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: AiFillHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: AiOutlineBarChart,
        label: "products",
        active: pathname === "/products",
        href: "/products",
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
