"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ categories }) {
  const pathname = usePathname();

  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <div>
            <p className="font-bold text-green-700 leading-none">বাজার দর</p>
            <p className="text-xs text-gray-500" suppressHydrationWarning>
              {date}
            </p>
          </div>
        </Link>

        <div className="flex gap-2">
          <Link
            href="/signin"
            className="btn btn-sm sm:btn-md btn-outline btn-success"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="btn btn-sm sm:btn-md btn-success text-white"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      <nav className="max-w-6xl mx-auto px-4 pb-2 flex gap-2 overflow-x-auto">
        <Link
          href="/"
          className={`px-3 py-1 rounded-full whitespace-nowrap text-sm ${
            pathname === "/"
              ? "bg-green-600 text-white"
              : "bg-green-100 text-green-800"
          }`}
        >
          সব
        </Link>

        {categories.map((c) => {
          const active = pathname === `/category/${c.slug}`;
          return (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={`px-3 py-1 rounded-full whitespace-nowrap text-sm ${
                active
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {c.icon} {c.nameBn}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}