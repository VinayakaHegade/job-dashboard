import type { Metadata } from "next";
import { generalSans, satoshi } from "./fonts";
import "./globals.css";
import Header from "@/components/layouts/header/Header";

export const metadata: Metadata = {
  title: "Clade",
  description: "Find the best remote jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${generalSans.variable} ${satoshi.variable}`}>
      <body
        className={`${generalSans.className} min-h-screen max-w-[1728px] mx-auto`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
