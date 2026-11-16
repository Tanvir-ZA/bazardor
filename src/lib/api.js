import { cacheLife } from "next/cache";

const BASE = "https://openapi.programming-hero.com/api/bazardor";

export function toArray(d) {
  if (Array.isArray(d)) return d;
  return d?.data || d?.products || d?.categories || [];
}

export async function getCategories() {
  "use cache";
  cacheLife("hours");
  const r = await fetch(`${BASE}/categories`);
  return toArray(await r.json());
}

export async function getProducts(category) {
  "use cache";
  cacheLife("hours");
  const url = category
    ? `${BASE}/products?category=${category}`
    : `${BASE}/products`;
  const r = await fetch(url);
  return toArray(await r.json());
}