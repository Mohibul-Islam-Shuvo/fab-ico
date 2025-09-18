<script>
  import { goto } from '$app/navigation';
  import { cart } from '$lib/cart';

  function placeOrder() {
    cart.set([]);
    goto('/order-confirmation');
  }
</script>

<h1 class="text-2xl font-bold mb-4">Checkout</h1>

<form on:submit|preventDefault={placeOrder} class="bg-white p-8 rounded-lg shadow-md">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h2 class="text-xl font-bold mb-4">Shipping Information</h2>
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Name</label>
        <input type="text" id="name" class="w-full mt-2 p-2 border rounded-lg" required>
      </div>
      <div class="mb-4">
        <label for="address" class="block text-gray-700">Address</label>
        <input type="text" id="address" class="w-full mt-2 p-2 border rounded-lg" required>
      </div>
      <div class="mb-4">
        <label for="city" class="block text-gray-700">City</label>
        <input type="text" id="city" class="w-full mt-2 p-2 border rounded-lg" required>
      </div>
    </div>
    <div>
      <h2 class="text-xl font-bold mb-4">Payment Information</h2>
      <div class="mb-4">
        <label for="card" class="block text-gray-700">Card Number</label>
        <input type="text" id="card" class="w-full mt-2 p-2 border rounded-lg" required>
      </div>
      <div class="mb-4">
        <label for="expiry" class="block text-gray-700">Expiry Date</label>
        <input type="text" id="expiry" class="w-full mt-2 p-2 border rounded-lg" placeholder="MM/YY" required>
      </div>
      <div class="mb-4">
        <label for="cvv" class="block text-gray-700">CVV</label>
        <input type="text" id="cvv" class="w-full mt-2 p-2 border rounded-lg" required>
      </div>
    </div>
  </div>
  <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mt-6">Place Order</button>
</form>
