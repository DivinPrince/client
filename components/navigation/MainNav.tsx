"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";
import NavLink from "./NavLink";
import useRoutes from "@/hooks/useRoutes";
import Separater from "../Separater";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();
  const main = useRoutes()
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
  }));

  return (
    <>
      <div className="flex flex-col gap-2 text-[20px]">
        {main.map((route) => (
          <>
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'font-medium transition-colors hover:text-primary',
                route.active ? 'text-primary' : ''
              )}
            >
              {route.label}
            </Link>
            <Separater />
          </>
        ))}
        {routes.map((route) => (
          <>
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'font-medium transition-colors hover:',
                route.active ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {route.label}
            </Link>
            <Separater />
          </>
        ))}
      </div>
    </>
  )
};

export default MainNav;
