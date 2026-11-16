import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-green-700">404</h1>
      <p className="my-4">দুঃখিত, পেজটি খুঁজে পাওয়া যায়নি।</p>
      <Link href="/" className="btn btn-success text-white">হোম পেজে ফিরে যান</Link>
    </div>
  );
}