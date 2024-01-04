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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <div className="items-end gap-2 hidden md:flex">
          <Image src="/logo.png" alt="logo" width={60} height={40} />
          <p className="text-lg font-bold font-serif">
            Crpto<span className="text-orange-500">Tech</span>
          </p>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <Image src="/logo.png" alt="logo" width={40} height={40} className="aspect-square" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
