
<script lang="ts">
  import type { PageData } from './$types';
  import ProductCard from '$lib/components/ProductCard.svelte';

  export let data: PageData;
</script>

<h1 class="text-3xl font-bold mb-6">
  Search Results for: <span class="text-indigo-600">"{data.query}"</span>
</h1>

{#if data.products.length > 0}
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {#each data.products as product (product.id)}
      <ProductCard {product} />
    {/each}
  </div>
{:else}
  <div class="text-center py-16">
    <p class="text-xl text-gray-500">No products found matching your search.</p>
    <a href="/" class="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
      Continue Shopping
    </a>
  </div>
{/if}
