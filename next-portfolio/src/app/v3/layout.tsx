import { Inter } from "next/font/google";
import "./v3-globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function V3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={inter.variable}>{children}</div>;
}
