"use client";
import { authClient } from "@/lib/auth-client";

export default function SocialButtons() {
  function login(provider) {
    authClient.signIn.social({ provider, callbackURL: "/" });
  }

  return (
    <div className="space-y-2">
      <div className="divider text-sm text-gray-500">অথবা</div>
      <button
        type="button"
        onClick={() => login("google")}
        className="btn btn-outline w-full"
      >
        Google দিয়ে চালিয়ে যান
      </button>
      <button
        type="button"
        onClick={() => login("github")}
        className="btn btn-outline w-full"
      >
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
}