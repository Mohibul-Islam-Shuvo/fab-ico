
import type { PageLoad } from './$types';
import products from '$lib/data/products.json';

export const load: PageLoad = async ({ url }) => {
  const query = url.searchParams.get('q')?.toLowerCase() || '';
  
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  return {
    products: filteredProducts,
    query
  };
};
