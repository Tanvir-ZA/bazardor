import { notFound } from "next/navigation";
import CategoryList from "@/components/CategoryList";
import { getCategories, getProducts } from "@/lib/api";

import { Suspense } from "react";

async function Content({ params })  {
  const { slug } = await params;

  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = await getProducts(slug);
  if (products.length === 0) notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        {category.icon} {category.nameBn}
      </h1>
      <CategoryList products={products} />
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