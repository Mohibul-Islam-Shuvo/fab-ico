
<script lang="ts">
  import products from '$lib/data/products.json';
  import ProductCard from '$lib/components/ProductCard.svelte';

  let generatedOutfit: any[] | null = null;

  function generateOutfit() {
    const tops = products.filter(p => p.category === 'Tops');
    const bottoms = products.filter(p => p.category === 'Bottoms');
    const footwear = products.filter(p => p.category === 'Footwear');

    if (tops.length && bottoms.length && footwear.length) {
      const randomTop = tops[Math.floor(Math.random() * tops.length)];
      const randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
      const randomFootwear = footwear[Math.floor(Math.random() * footwear.length)];
      generatedOutfit = [randomTop, randomBottom, randomFootwear];
    } else {
      generatedOutfit = []; // Set to empty array if categories are missing
    }
  }
</script>

<div class="text-center">
  <h1 class="text-3xl font-bold mb-2">AI Outfit Generator</h1>
  <p class="text-gray-600 mb-6">Let our AI create the perfect outfit for you!</p>
  <button on:click={generateOutfit} class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg">
    ✨ Generate My Outfit
  </button>
</div>

{#if generatedOutfit}
  {#if generatedOutfit.length > 0}
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-center mb-6">Your AI-Generated Outfit:</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {#each generatedOutfit as product (product.id)}
          <ProductCard {product} />
        {/each}
      </div>
    </div>
  {:else}
    <p class="text-center mt-8 text-red-500">Could not generate a full outfit. Please ensure there are products in 'Tops', 'Bottoms', and 'Footwear' categories.</p>
  {/if}
{/if}
