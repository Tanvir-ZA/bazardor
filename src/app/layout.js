import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCategories } from "@/lib/api";

const font = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"] });

export const metadata = { title: "বাজার দর" };

export default async function RootLayout({ children }) {
  const categories = await getCategories();
  return (
    <html lang="bn" data-theme="light">
      <body className={`${font.className} bg-green-50 min-h-screen flex flex-col`}>
        <Navbar categories={categories} />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}