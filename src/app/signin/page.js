"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import PasswordInput from "@/components/PasswordInput";
import SocialButtons from "@/components/SocialButtons";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    setLoading(true);

    const { error } = await authClient.signIn.email({
      email: f.get("email"),
      password: f.get("password"),
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "ইমেইল বা পাসওয়ার্ড ভুল");
      return;
    }
    toast.success("সাইন ইন সফল হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm p-6">
      <h1 className="text-2xl font-bold text-green-900 mb-4">সাইন ইন</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="email"
          type="email"
          placeholder="ইমেইল"
          required
          className="input input-bordered w-full"
        />
        <PasswordInput name="password" placeholder="পাসওয়ার্ড" required />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-success text-white w-full"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
        </button>
      </form>
      <SocialButtons />

      <p className="text-sm text-gray-600 mt-4 text-center">
        একাউন্ট নেই?{" "}
        <Link href="/signup" className="text-green-700 font-semibold">
          সাইন আপ
        </Link>
      </p>
    </div>
  );
}