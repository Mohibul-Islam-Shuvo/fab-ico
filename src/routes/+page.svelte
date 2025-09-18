<script lang="ts">
  import type { PageData } from './$types';
  import ProductCard from '$lib/components/ProductCard.svelte';

  export let data: PageData;

  let selectedCategories: string[] = [];
  let sortBy = 'name-asc';

  $: filteredProducts = data.products.filter(p => 
    selectedCategories.length === 0 || selectedCategories.includes(p.category)
  );

  $: sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
</script>

<div class="flex flex-col md:flex-row gap-8">
  <!-- Filters -->
  <aside class="w-full md:w-1/4 lg:w-1/5">
    <h2 class="text-xl font-bold mb-4">Filters</h2>
    
    <div class="mb-6">
      <h3 class="font-semibold mb-2">Category</h3>
      {#each data.categories as category}
        <label class="flex items-center space-x-2">
          <input type="checkbox" bind:group={selectedCategories} value={category} class="rounded text-indigo-600 focus:ring-indigo-500">
          <span>{category}</span>
        </label>
      {/each}
    </div>

    <div>
      <h3 class="font-semibold mb-2">Sort By</h3>
      <select bind:value={sortBy} class="w-full p-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
        <option value="name-asc">Name (A-Z)</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  </aside>

  <!-- Product Grid -->
  <main class="w-full md:w-3/4 lg:w-4/5">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each sortedProducts as product (product.id)}
        <ProductCard {product} />
      {:else}
        <p class="col-span-full text-center text-gray-500">No products match the selected filters.</p>
      {/each}
    </div>
  </main>
</div>