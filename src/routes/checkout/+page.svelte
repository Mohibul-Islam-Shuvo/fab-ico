<script lang="ts">
  import { cart } from '$lib/cart';
  import { goto } from '$app/navigation';
  import { toast } from 'svelte-5-french-toast';
  import { onMount } from 'svelte';

  // These would be imported from svelte-stripe
  // import { Stripe, StripeElements } from 'svelte-stripe';

  let total = 0;
  $: {
    total = $cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  let loading = false;
  let clientSecret = '';

  // You would get your publishable key from your Stripe dashboard
  // const stripe = new Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');

  onMount(async () => {
    // Create PaymentIntent as soon as the page loads
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: $cart })
    });
    const data = await response.json();
    clientSecret = data.clientSecret;
  });

  const handleSubmit = async () => {
    loading = true;

    // The following is the real Stripe payment logic that you would use.
    /*
    const { error } = await stripe.confirmPayment({
      elements, // from StripeElements
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
      },
    });

    if (error) {
      toast.error(error.message);
      loading = false;
    } else {
      toast.success('Payment successful!');
      cart.set([]);
    }
    */

    // This is the simulation logic from before
    await new Promise(resolve => setTimeout(resolve, 2000));
    loading = false;
    toast.success('Payment successful!');
    cart.set([]);
    goto('/order-confirmation');
  };
</script>

<h1 class="text-2xl font-bold mb-6">Checkout</h1>

<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
  <div>
    <h2 class="text-xl font-bold mb-4">Shipping Information</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2">Full Name</label>
        <input type="text" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label for="address" class="block text-gray-700 font-bold mb-2">Address</label>
        <input type="text" id="address" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label for="city" class="block text-gray-700 font-bold mb-2">City</label>
        <input type="text" id="city" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label for="zip" class="block text-gray-700 font-bold mb-2">ZIP Code</label>
        <input type="text" id="zip" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
    </form>
  </div>
  <div>
    <h2 class="text-xl font-bold mb-4">Your Order</h2>
    {#if $cart.length === 0}
      <p>Your cart is empty.</p>
    {:else}
      <div class="grid grid-cols-1 gap-4 mb-6">
        {#each $cart as item (item.id)}
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-bold">{item.name}</h3>
              <p class="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        {/each}
      </div>

      <!-- This is where you would mount the StripeElements component -->
      <!-- <StripeElements {stripe} {clientSecret} /> -->

      <div class="text-right">
        <p class="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button on:click={handleSubmit} class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" disabled={loading || !clientSecret}>
          {#if loading}
            Processing...
          {:else}
            Pay Now
          {/if}
        </button>
        <p class="text-sm text-gray-500 mt-2">This is a simulated payment. No real transaction will occur.</p>
      </div>
    {/if}
  </div>
</div>