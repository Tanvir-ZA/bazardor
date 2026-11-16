"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    setLoading(true);

    const { error } = await authClient.signUp.email({
      name: f.get("name"),
      email: f.get("email"),
      password: f.get("password"),
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "সাইন আপ করা যায়নি");
      return;
    }
    toast.success("সাইন আপ সফল হয়েছে, এবার সাইন ইন করুন");
    router.push("/signin");
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm p-6">
      <h1 className="text-2xl font-bold text-green-900 mb-4">সাইন আপ</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          type="text"
          placeholder="নাম"
          required
          className="input input-bordered w-full"
        />
        <input
          name="email"
          type="email"
          placeholder="ইমেইল"
          required
          className="input input-bordered w-full"
        />
        <input
          name="password"
          type="password"
          placeholder="পাসওয়ার্ড (কমপক্ষে ৮ অক্ষর)"
          required
          minLength={8}
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-success text-white w-full"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন আপ"}
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center">
        আগে থেকেই একাউন্ট আছে?{" "}
        <Link href="/signin" className="text-green-700 font-semibold">
          সাইন ইন
        </Link>
      </p>
    </div>
  );
}