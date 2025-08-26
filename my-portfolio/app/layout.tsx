import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
})

export const metadata: Metadata = {
  title: "Aayan Rahman - Electrical Engineering Student",
  description:
    "University of Waterloo Electrical Engineering (Co-op) student building useful things with electrons & code.",
  keywords: ["Electrical Engineering", "University of Waterloo", "Embedded Systems", "FPGA", "PCB Design"],
  authors: [{ name: "Aayan Rahman" }],
  openGraph: {
    title: "Aayan Rahman - Electrical Engineering Student",
    description: "Building useful things with electrons & code.",
    url: "https://aayanrahman.dev",
    siteName: "Aayan Rahman Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayan Rahman - Electrical Engineering Student",
    description: "Building useful things with electrons & code.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
      <body className="bg-[#FCFCFA] text-[#1B1B1B] font-sans">{children}</body>
    </html>
  )
}
