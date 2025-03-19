import type { Metadata } from "next";
import {  Outfit } from "next/font/google";
import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Genuine School: International and Bilingual School",
  description: "Choose Genuine School for your children to receive a bilingual education, virtually and graduate with a US degree. Enrollment is open!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
