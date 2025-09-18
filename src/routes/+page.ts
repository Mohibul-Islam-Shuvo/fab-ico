import type { PageLoad } from './$types';
import products from '$lib/data/products.json';

export const load: PageLoad = async () => {
  const categories = [...new Set(products.map(p => p.category))];
  return {
    products,
    categories
  };
};
