import type { Metadata } from "next";
import { Wellfleet } from "next/font/google";
import "./globals.css";

const wellFleet = Wellfleet({
  subsets: ["latin"],
  weight: "400",
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
      <body className={wellFleet.className}>{children}</body>
    </html>
  );
}
