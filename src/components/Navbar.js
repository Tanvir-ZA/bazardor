"use client";
import Link from "next/link";
import Image from "next/image";
import { Suspense, useSyncExternalStore } from "react";
import NavLinks from "@/components/NavLinks";

function subscribe() {
  return () => {};
}

function getDate() {
  return new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Navbar({ categories }) {
  const date = useSyncExternalStore(subscribe, getDate, () => "");

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <div>
            <p className="font-bold text-green-700 leading-none">বাজার দর</p>
            <p className="text-xs text-gray-500">{date}</p>
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

      <nav className="max-w-6xl mx-auto px-4 pb-2 flex gap-2 overflow-x-auto min-h-10">
        <Suspense fallback={null}>
          <NavLinks categories={categories} />
        </Suspense>
      </nav>
    </header>
  );
}