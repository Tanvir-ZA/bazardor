"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function Profile() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <div className="skeleton h-48 max-w-md mx-auto"></div>;
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm p-6 text-center">
      <div className="w-20 h-20 rounded-full bg-green-100 text-green-700 text-3xl font-bold flex items-center justify-center mx-auto mb-3">
        {user.name?.charAt(0)}
      </div>
      <h1 className="text-2xl font-bold text-green-900">{user.name}</h1>
      <p className="text-gray-600 mb-5">{user.email}</p>

      <Link href="/profile/update" className="btn btn-success text-white">
        তথ্য আপডেট করুন
      </Link>
    </div>
  );
}