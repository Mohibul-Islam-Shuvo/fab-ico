<script lang="ts">
  import { cart, removeFromCart } from '$lib/cart';

  let total = 0;
  $: {
    total = $cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
</script>

<h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>

{#if $cart.length === 0}
  <p>Your cart is empty.</p>
{:else}
  <div class="grid grid-cols-1 gap-6">
    {#each $cart as item (item.id)}
      <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
        <div>
          <h2 class="text-lg font-bold">{item.name}</h2>
          <p class="text-gray-600">${item.price} x {item.quantity}</p>
        </div>
        <div>
          <button on:click={() => removeFromCart(item)} class="text-red-500 hover:text-red-700">Remove</button>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-6 text-right">
    <p class="text-xl font-bold">Total: ${total.toFixed(2)}</p>
    <a href="/checkout" class="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</a>
  </div>
{/if}