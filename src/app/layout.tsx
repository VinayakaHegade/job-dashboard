import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","700"],
});

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
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen max-w-[1728px] mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
