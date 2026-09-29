import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[120px] w-full flex items-center justify-between bg-transparent relative z-50">
      <Link href="/" className="flex items-center gap-[8px]">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <Image src="/images/logo/logo.svg" alt="ByteSpace Logo" fill className="object-contain" />
        </div>
        <span className="font-clash text-neutral-50 font-semibold text-2xl tracking-wide">
          ByteSpace
        </span>
      </Link>
      <ul className="flex items-center gap-[24px]">
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

      {/* Right: Actions */}
      <div className="flex items-center gap-[24px]">
        <Link href="/signin" className="text-body-m text-neutral-50 hover:text-neutral-50/80 transition-colors">
          Sign In
        </Link>
        <Link href="/join" className="text-body-m text-neutral-50 hover:text-neutral-50/80 transition-colors">
          Join Us
        </Link>
        <button className="flex items-center justify-center relative w-6 h-6 hover:opacity-75 transition-opacity">
          <Image src="/images/icons/cart.svg" alt="Cart" fill className="object-contain" />
        </button>
      </div>
    </nav>
  );
}
