import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/src/lib/data/products.json');
  const products = await res.json();

  return {
    products
  };
};