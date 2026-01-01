import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import 'modern-normalize'

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Newsletter App",
  description: "Testing newsletter app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.variable}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
