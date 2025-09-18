<script lang="ts">
  import { addToCart } from '$lib/cart';
  export let product: { id: number; name: string; price: number; image: string; category: string; description: string; };

  function handleAddToCart(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  }
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden group transition-shadow duration-300 hover:shadow-xl flex flex-col">
  <a href={`/product/${product.id}`} class="flex-grow">
    <div class="relative">
      <img src={product.image} alt={product.name} class="w-full h-64 object-cover">
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
      <p class="text-gray-600 text-lg font-semibold">${product.price}</p>
    </div>
  </a>
  <div class="px-4 pb-4">
    <button on:click={handleAddToCart} class="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
      Add to Cart
    </button>
  </div>
</div>