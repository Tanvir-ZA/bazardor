"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ categories }) {
  const pathname = usePathname();

  return (
    <>
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
    </>
  );
}