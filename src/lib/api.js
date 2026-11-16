const BASE = "https://openapi.programming-hero.com/api/bazardor";

export function toArray(d) {
  if (Array.isArray(d)) return d;
  return d?.data || d?.products || d?.categories || [];
}

export async function getCategories() {
  const r = await fetch(`${BASE}/categories`, { cache: "no-store" });
  return toArray(await r.json());
}

export async function getProducts(category) {
  const url = category
    ? `${BASE}/products?category=${category}`
    : `${BASE}/products`;
  const r = await fetch(url, { cache: "no-store" });
  return toArray(await r.json());
}