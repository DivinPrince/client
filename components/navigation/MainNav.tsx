'use client'
import { Button, buttonVariants } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import useRoutes from "@/hooks/useRoutes";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Component({ data }: { data: Category[] }) {
  const pathname = usePathname();
  const main = useRoutes();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="flex h-screen">
      <Sheet>
        <SheetTrigger asChild className="fixed top-0 mt-5 ml-5 z-[51]">
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-64 z-[52]" side="left">
          <Image src='/logo.png' width={40} height={40} alt=""/>
          <nav className="flex flex-col gap-4 p-4">
            {main.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "w-full text-left",
                  route.active
                    ? buttonVariants({variant: 'secondary'})
                    : buttonVariants({variant: 'ghost'}),
                    buttonVariants({variant: 'ghost'})
                )}
              >
                {route.label}
              </Link>
            ))}
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "w-full",
                  route.active
                    ? buttonVariants({variant: 'secondary'})
                    : buttonVariants({variant: 'ghost'}),
                    buttonVariants({variant: 'ghost'})
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden fixed left-0 lg:flex lg:flex-col lg:w-[240px] h-screen lg:border-r">
        <nav className="flex flex-col gap-4 p-4">
        {main.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "w-full",
                  route.active
                    ? buttonVariants({variant: 'secondary'})
                    : buttonVariants({variant: 'ghost'}),
                    buttonVariants({variant: 'ghost'})
                )}
              >
                {route.label}
              </Link>
            ))}
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  route.active
                    ? buttonVariants({variant: 'secondary'})
                    : buttonVariants({variant: 'ghost'}),
                    buttonVariants({variant: 'ghost'})
                )}
              >
                {route.label}
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
