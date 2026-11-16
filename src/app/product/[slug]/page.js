import { notFound } from "next/navigation";
import { getProducts } from "@/lib/api";
import { bnPrice, unitBn, changeInfo } from "@/lib/bn";
import { Suspense } from "react";

async function Content({ params })  {
  const { slug } = await params;

  const products = await getProducts();
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  const min = Math.min(...p.markets.map((m) => m.min));
  const max = Math.max(...p.markets.map((m) => m.max));
  const avg = Math.round(
    p.markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / p.markets.length
  );
  const ch = changeInfo(p.change);

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-5xl">{p.image}</span>
          <h1 className="text-3xl font-bold text-green-900">{p.nameBn}</h1>
        </div>
        <p className="text-gray-600 mb-3">
          আজকের দাম {bnPrice(p.today)} টাকা, গতকালের দাম ছিল {bnPrice(p.yesterday)} টাকা।{" "}
          <span className={`font-semibold ${ch.cls}`}>{ch.text}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-success text-white">
            {p.categoryIcon} {p.categoryNameBn}
          </span>
          <span className="badge badge-outline">প্রতি {unitBn[p.unit]}</span>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
          <p className="text-2xl font-bold text-green-700">{bnPrice(min)} টাকা</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="text-sm text-gray-500">সর্বোচ্চ দাম</p>
          <p className="text-2xl font-bold text-red-600">{bnPrice(max)} টাকা</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="text-sm text-gray-500">গড় দাম</p>
          <p className="text-2xl font-bold text-green-900">{bnPrice(avg)} টাকা</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-green-900 mb-4">বাজারভিত্তিক আজকের দাম</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th>সর্বনিম্ন</th>
                <th>সর্বোচ্চ</th>
              </tr>
            </thead>
            <tbody>
              {p.markets.map((m, i) => (
                <tr key={i}>
                  <td>{m.market}</td>
                  <td>{m.division}</td>
                  <td>{bnPrice(m.min)} টাকা</td>
                  <td>{bnPrice(m.max)} টাকা</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
export default function CategoryPage({ params }) {
  return (
    <Suspense fallback={<div className="skeleton h-40 w-full"></div>}>
      <Content params={params} />
    </Suspense>
  );
}