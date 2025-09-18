import type { PageLoad } from './$types';
import products from '$lib/data/products.json';

export const load: PageLoad = async ({ params }) => {
  const product = products.find(p => p.id === parseInt(params.id));
  return {
    product
  };
};
