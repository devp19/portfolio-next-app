import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Patel",
  description: "Software Engineer – Code, Cognition & Applied Research",

  openGraph: {
    title: "Dev Patel",
    description: "Software Engineer – Code, Cognition & Applied Research",
    url: "https://devp.ca",           
    type: "website",
    images: [
      {
        url: "/og-image.png",             
        width: 1_200,
        height: 630,
        alt: "Dev Patel – Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dev Patel",
    description: "Software Engineer – Code, Cognition & Applied Research",
    images: ["/og-image-2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
