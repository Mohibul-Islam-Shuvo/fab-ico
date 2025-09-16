import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch(`/src/lib/data/products.json`);
  const products = await res.json();
  const product = products.find((p) => p.id === parseInt(params.id));

  return {
    product
  };
};