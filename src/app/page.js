import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

const grid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

export default async function Home() {
  const products = await getProducts();

  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="space-y-10">
      <Hero />

      <section>
        <h2 className="text-2xl font-bold text-green-900 mb-4">আজ দাম বেড়েছে ▲</h2>
        <div className={grid}>
          {risers.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-green-900 mb-4">আজ দাম কমেছে ▼</h2>
        <div className={grid}>
          {fallers.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section id="সব-পণ্য">
        <h2 className="text-2xl font-bold text-green-900">সব পণ্য</h2>
        <p className="text-gray-500 mb-4">সব ক্যাটাগরির পণ্যের আজকের দাম</p>
        <div className={grid}>
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}