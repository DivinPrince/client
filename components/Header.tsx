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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MainNav from "./navigation/MainNav";
import Nav from "./navigation/Nav";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = ({}) => {
  const [isMouted, setIsMouted] = useState(false);
  useEffect(() => {
    setIsMouted(true);
  }, []);

  const cart = useCart();

  if (!isMouted) {
    return null;
  }

  return (
    <>
      <div className="p-2 flex justify-between sticky z-50 top-0 backdrop-blur-lg">
        <div className="flex items-end gap-2">
          <Sheet>
            <SheetTrigger>
              <Image src="/logo.png" alt="logo" width={60} height={40} />
              <p className="text-lg font-bold font-serif hidden md:flex">
                Crpto<span className="text-orange-500">Tech</span>
              </p>
            </SheetTrigger>
            <SheetContent className='p-5 bg-gray-100 dark:bg-neutral-800/30 mt-2 rounded-r-lg mb-2 border-none'>
              <Nav />
            </SheetContent>
          </Sheet>
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
