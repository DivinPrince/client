"use client";
import Image from "next/image";
import react, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import Separater from "./Separater";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MainNav from "./navigation/MainNav";
import Mobi from "./navigation/Mobi";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = ({}) => {
  const cart = useCart();

  return (
    <>
      <div className="p-2 flex justify-between sticky z-50 top-0 backdrop-blur-lg">
        <div className="items-end gap-2 hidden md:flex">
          <Image src="/logo.png" alt="logo" width={60} height={40} />
          <p className="text-lg font-bold font-serif">
            Crpto<span className="text-orange-500">Tech</span>
          </p>
        </div>

        <div className="flex-1 flex justify-end gap-4 items-center">
          <Input
            type="search"
            placeholder="Search products"
            id="search"
            className="w-300"
          />
          <Link href="/cart">
            <Button className="rounded-full px-4 py-2 flex gap-2">
              <ShoppingBag size={20} />
              <span>{cart.items.length}</span>
            </Button>
          </Link>
        </div>
      </div>
      <Separater />
    </>
  );
};
export default Header;
