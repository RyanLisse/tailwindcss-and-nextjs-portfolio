"use client";

import "../styles/globals.css";

import { Inter, Manrope } from "@next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import cx from "classnames";
import localFont from "@next/font/local";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const bsmnt = localFont({
  src: "./BasementGrotesque-Black_v1.202.otf",
  weight: "800",
  variable: "--font-bsmnt",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(manrope.variable, inter.variable, bsmnt.variable)}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-zinc-200 bg-[url('/grid-2.svg')] text-zinc-800 transition-all duration-1000 dark:bg-gray-1100 dark:text-slate-50 ">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
