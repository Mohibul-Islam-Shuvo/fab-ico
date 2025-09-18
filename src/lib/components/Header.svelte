<script lang="ts">
  import { page } from '$app/stores';
  import { cart } from '$lib/cart';
  import { derived } from 'svelte/store';

  const cartCount = derived(cart, ($cart) => {
    return $cart.reduce((acc, item) => acc + item.quantity, 0);
  });
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4 sm:px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex-shrink-0">
        <a href="/" class="text-2xl font-bold text-gray-800 hover:text-indigo-600">Fabico</a>
      </div>

      <nav class="hidden md:flex items-center space-x-4">
        <a href="/" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" class:text-indigo-600={$page.url.pathname === '/'}>Home</a>
        <a href="/ai-generator" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" class:text-indigo-600={$page.url.pathname === '/ai-generator'}>✨ AI Generator</a>
        <a href="/about" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" class:text-indigo-600={$page.url.pathname === '/about'}>About</a>
        <a href="/contact" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" class:text-indigo-600={$page.url.pathname === '/contact'}>Contact</a>
      </nav>

      <div class="flex items-center space-x-4">
        <form action="/search" method="GET" class="hidden sm:block">
          <input type="search" name="q" placeholder="Search..." class="px-3 py-1.5 border rounded-full text-sm focus:ring-indigo-500 focus:border-indigo-500">
        </form>
        <a href="/cart" class="relative text-gray-600 hover:text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {#if $cartCount > 0}
            <span class="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {$cartCount}
            </span>
          {/if}
        </a>
      </div>
    </div>
  </div>
</header>