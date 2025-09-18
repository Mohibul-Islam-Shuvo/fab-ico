<script lang="ts">
  import { cart, removeFromCart } from '$lib/cart';
  import { derived } from 'svelte/store';

  const total = derived(cart, ($cart) => {
    return $cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  });
</script>

<h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>

{#if $cart.length === 0}
  <p>Your cart is empty.</p>
{:else}
  <div class="grid grid-cols-1 gap-4">
    {#each $cart as item (item.id)}
      <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
        <div>
          <h2 class="text-lg font-bold">{item.name}</h2>
          <p class="text-gray-600">${item.price} x {item.quantity}</p>
        </div>
        <button on:click={() => removeFromCart(item)} class="text-red-500 hover:text-red-600">Remove</button>
      </div>
    {/each}
  </div>

  <div class="mt-8">
    <h2 class="text-xl font-bold">Total: ${$total}</h2>
    <a href="/checkout" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mt-4 inline-block">Checkout</a>
  </div>
{/if}
