<script lang="ts">
  import type { PageData } from './$types';
  import { addToCart } from '$lib/cart';

  export let data: PageData;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
  <div>
    <img src={data.product.image} alt={data.product.name} class="w-full h-auto object-cover rounded-lg shadow-md">
  </div>
  <div>
    <h1 class="text-3xl font-bold mb-4">{data.product.name}</h1>
    <p class="text-gray-600 mb-4">{data.product.description}</p>
    <p class="text-2xl font-bold mb-6">${data.product.price}</p>
    <button on:click={() => addToCart(data.product)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add to Cart
    </button>
  </div>
</div>