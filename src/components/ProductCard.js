import Link from "next/link";
import { bnPrice, unitBn, changeInfo } from "@/lib/bn";

export default function ProductCard({ p }) {
  const ch = changeInfo(p.change);

  return (
    <Link
      href={`/product/${p.slug}`}
      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition block"
    >
      <div className="text-4xl mb-2">{p.image}</div>
      <h3 className="font-bold text-lg">{p.nameBn}</h3>
      <p className="text-sm text-gray-500 mb-3">প্রতি {unitBn[p.unit]}</p>

      <div className="flex items-center justify-between border-t pt-2">
        <div>
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="font-bold text-green-800">{bnPrice(p.today)} টাকা</p>
        </div>
        <span className={`text-sm font-semibold ${ch.cls}`}>{ch.text}</span>
      </div>
    </Link>
  );
}