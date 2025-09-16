<script>
  import { page } from '$app/stores';
</script>

<header class="bg-white shadow-md">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div>
        <a href="/" class="text-2xl font-bold text-gray-800">Fabico</a>
      </div>
      <nav class="flex items-center">
        <a href="/" class="mx-3 text-gray-600 hover:text-gray-800" class:font-bold={$page.url.pathname === '/'}>Home</a>
        <a href="/about" class="mx-3 text-gray-600 hover:text-gray-800" class:font-bold={$page.url.pathname === '/about'}>About</a>
        <a href="/contact" class="mx-3 text-gray-600 hover:text-gray-800" class:font-bold={$page.url.pathname === '/contact'}>Contact</a>
        <a href="/cart" class="mx-3 text-gray-600 hover:text-gray-800" class:font-bold={$page.url.pathname === '/cart'}>Cart</a>
      </nav>
    </div>
  </div>
</header>