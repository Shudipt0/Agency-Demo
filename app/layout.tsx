'use client'

import "./globals.css";
import { NavbarDemo } from "@/components/NavbarDemo";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { usePathname } from "next/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <ClerkProvider>
    <html lang="en" >
      <body
        
         cz-shortcut-listen="true"
      >
        {pathName.includes('/admin')? null :  <NavbarDemo/>}
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
