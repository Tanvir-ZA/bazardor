import "./globals.css";
import { Noto_Sans_Bengali } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import { getCategories, getProducts } from "@/lib/api";

const font = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = { title: "বাজার দর" };

export default async function RootLayout({ children }) {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <html lang="bn" data-theme="light">
      <body className={`${font.className} bg-green-50 min-h-screen flex flex-col`}>
        <Navbar categories={categories} />
        <Ticker products={products} />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}