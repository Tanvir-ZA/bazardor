"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function CategoryList({ products }) {
  const [sort, setSort] = useState("default");

  const list = [...products];
  if (sort === "asc") list.sort((a, b) => a.today - b.today);
  if (sort === "desc") list.sort((a, b) => b.today - a.today);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-gray-600">সাজান:</span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-success select-sm sm:select-md"
        >
          <option value="default">ডিফল্ট</option>
          <option value="asc">দাম: কম থেকে বেশি</option>
          <option value="desc">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}