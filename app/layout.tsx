import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";



export const metadata: Metadata = {
  title: "Sarathkumar R | IT Student and Developer",
  description: "Sarathkumar's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="icon" href="/imgs/dp.png" />
  </head>

  <body>{children}</body>
</html>
  );
}
