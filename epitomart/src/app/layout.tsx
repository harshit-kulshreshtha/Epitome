import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "@/pages/epitomart/src/components/navbar";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
