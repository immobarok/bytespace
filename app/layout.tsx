import { Poppins, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading'
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const clashDisplay = localFont({
  src: "../public/fonts/WEB/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
});

import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, poppins.variable, clashDisplay.variable, "font-sans")}
    >
      <body>
        <ThemeProvider>
          <div className="w-full relative min-h-screen flex flex-col">
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="max-w-[1200px] mx-auto w-full relative px-4 xl:px-0">
                <Navbar />
              </div>
            </div>
            <div className="flex-1 w-full">
              {children}
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
