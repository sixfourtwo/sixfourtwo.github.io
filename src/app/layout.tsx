import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const scp = Source_Code_Pro({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Christoffer Iversen Junge",
  description: "A little bit about Chris..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={scp.className}>
      <meta name="apple-mobile-web-app-title" content="jnge" />
      <body className={scp.className}>
        {children}
      </body>
    </html>
  );
}
