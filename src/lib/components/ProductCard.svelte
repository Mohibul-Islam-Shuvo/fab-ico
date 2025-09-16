<script lang="ts">
  export let product: { id: number; name: string; price: number; image: string; };
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <a href={`/product/${product.id}`}>
    <img src={product.image} alt={product.name} class="w-full h-64 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-bold text-gray-800">{product.name}</h3>
      <p class="text-gray-600">${product.price}</p>
    </div>
  </a>
</div>