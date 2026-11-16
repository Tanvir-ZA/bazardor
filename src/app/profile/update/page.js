"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const name = new FormData(e.target).get("name");
    setLoading(true);

    const { error } = await authClient.updateUser({ name });

    setLoading(false);

    if (error) {
      toast.error(error.message || "আপডেট করা যায়নি");
      return;
    }
    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
  }

  if (isPending) {
    return <div className="skeleton h-40 max-w-md mx-auto"></div>;
  }

  if (!session) return null;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm p-6">
      <h1 className="text-2xl font-bold text-green-900 mb-4">তথ্য আপডেট</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          type="text"
          defaultValue={session.user.name}
          placeholder="নাম"
          required
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-success text-white w-full"
        >
          {loading ? "অপেক্ষা করুন..." : "তথ্য আপডেট করুন"}
        </button>
      </form>
    </div>
  );
}