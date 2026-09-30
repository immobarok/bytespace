"use client"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-12 lg:pt-[71px] pb-12 border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col px-4 xl:px-0">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[92px]">

          {/* Left Column */}
          <div className="flex flex-col w-full max-w-[528px]">
            <Link href="/" className="flex items-center gap-[8px]">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image src="/images/logo/logo.svg" alt="ByteSpace Logo" fill className="object-contain" />
              </div>
              <span className="font-clash text-neutral-950 font-semibold text-2xl tracking-wide">
                ByteSpace
              </span>
            </Link>

            <p className="text-body-s text-neutral-950 mt-6 max-w-full">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-neutral-200 rounded-[100px] px-6 h-[52px] outline-none focus:border-primary text-neutral-950 placeholder:text-neutral-500 placeholder:text-body-m"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-lime-400 hover:bg-lime-500 transition-colors text-label-l px-6 py-3 h-[52px] sm:h-[46px] rounded-[100px] shrink-0"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-neutral-950 mt-6 max-w-full">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-[40px] w-full lg:w-auto mt-4 lg:mt-0">
            {/* Column 1 */}
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Featured Courses</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Featured Categories</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Business</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">IT</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Design</Link></li>
            </ul>
            {/* Column 2 */}
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Development</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Marketing</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Photography</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Finance</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Sport</Link></li>
            </ul>
            {/* Column 3 */}
            <ul className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Become a Creator</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Affiliate Program</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">Help</Link></li>
              <li><Link href="#" className="text-body-s text-neutral-950 hover:text-neutral-900 transition-colors">About</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-[80px] pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <p className="text-body-s text-neutral-500">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-8">
            <Link href="#" className="text-body-xs text-neutral-950 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-body-xs text-neutral-950 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-body-xs text-neutral-950 transition-colors">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
