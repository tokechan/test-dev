import type { Metadata } from "next";
import {ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import "./globals.css";
import SideMenu from "@/components/SideMenu";

export const metadata: Metadata = {
  title: "JStack X Clone",
  description: "X Clone created using JStack",
  icons: [{ rel: "icom", url: "/facicon.icon"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <div className="flex min-h-screen">
            <main className="flex-1 transition-all duration-300">
              <SideMenu />
              <main className="flex-1 transition-all duration-300"></main>
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}