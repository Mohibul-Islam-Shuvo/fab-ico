<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { Toaster } from 'svelte-5-french-toast';
</script>

<div class="flex flex-col min-h-screen">
  <Toaster />
  <Header />
  {#key $page.url.pathname}
    <main in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }} class="flex-grow container mx-auto px-6 py-8">
      <slot />
    </main>
  {/key}
  <Footer />
</div>