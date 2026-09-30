"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="h-[120px] w-full max-w-[1200px] mx-auto px-4 xl:px-0 flex items-center justify-between bg-transparent relative z-50">
      <Link href="/" className="flex items-center gap-[8px]">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <Image src="/images/logo/logo.svg" alt="ByteSpace Logo" fill className="object-contain" />
        </div>
        <span className="font-clash text-neutral-50 font-semibold text-2xl tracking-wide">
          ByteSpace
        </span>
      </Link>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-[24px]">
        <li>
          <Link href="/" className="text-body-m text-neutral-50 hover:text-neutral-50/80 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/courses" className="text-body-m text-neutral-50 hover:text-neutral-50/80 transition-colors">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/creators" className="text-body-m text-neutral-50 hover:text-neutral-50/80 transition-colors">
            Creators
          </Link>
        </li>
      </ul>

      {/* Desktop Right: Actions */}
      <div className="hidden md:flex items-center gap-[24px]">
        <Link href="/login" className="text-body-m text-neutral-50 hover:text-neutral-50/80 transition-colors">
          Sign In
        </Link>
        <Link href="/register" className="text-body-m text-neutral-50 hover:text-neutral-50/80 transition-colors">
          Join Us
        </Link>
        <button className="flex items-center justify-center relative w-6 h-6 hover:opacity-75 transition-opacity">
          <Image src="/images/icons/cart.svg" alt="Cart" fill className="object-contain" />
        </button>
      </div>

      {/* Mobile Right: Cart & Menu */}
      <div className="flex md:hidden items-center gap-4">
        <button className="flex items-center justify-center relative w-6 h-6 hover:opacity-75 transition-opacity">
          <Image src="/images/icons/cart.svg" alt="Cart" fill className="object-contain" />
        </button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="text-white hover:opacity-75 transition-opacity" aria-label="Open menu">
            <Menu className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#003be2] border-none text-white w-[300px] flex flex-col pt-12 px-6 pb-6">
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            
            <div className="flex flex-col gap-8 h-full">
              {/* Mobile Links */}
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/" className="block px-4 py-3 text-body-m font-semibold hover:text-lime-400 hover:bg-white/5 rounded-xl transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="block px-4 py-3 text-body-m font-semibold hover:text-lime-400 hover:bg-white/5 rounded-xl transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/creators" className="block px-4 py-3 text-body-m font-semibold hover:text-lime-400 hover:bg-white/5 rounded-xl transition-colors">
                    Creators
                  </Link>
                </li>
              </ul>

              {/* Mobile Actions */}
              <div className="flex flex-col gap-4 mt-auto pb-8">
                <Link 
                  href="/login" 
                  className="w-full text-center py-4 border border-white/20 rounded-full font-semibold text-body-l hover:bg-white/10 transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="w-full text-center py-4 bg-lime-400 text-neutral-950 rounded-full font-semibold text-body-l hover:bg-lime-500 transition-colors"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
