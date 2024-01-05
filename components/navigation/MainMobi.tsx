"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import NavLink from "./NavLink";
import useRoutes from "@/hooks/useRoutes";
import Separater from "../Separater";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "../ui/button";

interface MainMobiProps {
  data: Category[];
}

const MainMobi: React.FC<MainMobiProps> = ({ data }) => {
  const pathname = usePathname();
  const main = useRoutes();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
  }));

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="bg-none">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="aspect-square"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {main.map((route) => (
            <DropdownMenuItem>
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : ""
                )}
              >
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
          {routes.map((route) => (
            <DropdownMenuItem>
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "font-medium transition-colors hover:",
                  route.active ? "text-primary" : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MainMobi;
