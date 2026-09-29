import { Poppins, Geist_Mono } from "next/font/google"

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
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, poppins.variable, "font-sans")}
    >
      <body>
        <ThemeProvider>
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="max-w-[1200px] mx-auto w-full">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
