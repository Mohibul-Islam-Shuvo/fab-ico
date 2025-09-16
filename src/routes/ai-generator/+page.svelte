<script lang="ts">
  let productName = '';
  let keywords = '';
  let generatedDescription = '';
  let loading = false;

  const generateDescription = async () => {
    loading = true;
    // In a real scenario, you might call an external AI service.
    // Here, we'll simulate an AI generating a description based on the input.
    const prompt = `Generate a compelling e-commerce product description for a product named "${productName}" with the following keywords: ${keywords}.`;
    
    // Simulate AI response time
    await new Promise(resolve => setTimeout(resolve, 1500));

    // This is a simplified example of what the AI might generate.
    generatedDescription = `Introducing the ${productName}, your new go-to for any occasion. Crafted with a focus on being ${keywords}, this piece is a must-have in every wardrobe. Its unique design and high-quality materials ensure both comfort and style. Perfect for dressing up or down, the ${productName} offers versatility and a timeless look. Don't miss out on this essential item!`;
    
    loading = false;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDescription);
    alert('Description copied to clipboard!');
  };
</script>

<h1 class="text-2xl font-bold mb-6">AI Description Generator</h1>

<div class="max-w-xl">
  <div class="mb-4">
    <label for="productName" class="block text-gray-700 font-bold mb-2">Product Name</label>
    <input type="text" id="productName" bind:value={productName} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="e.g., Women's Summer Dress">
  </div>

  <div class="mb-4">
    <label for="keywords" class="block text-gray-700 font-bold mb-2">Keywords</label>
    <input type="text" id="keywords" bind:value={keywords} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="e.g., lightweight, floral print, casual">
  </div>

  <button on:click={generateDescription} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={loading}>
    {#if loading}
      Generating...
    {:else}
      Generate Description
    {/if}
  </button>

  {#if generatedDescription}
    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Generated Description</h2>
      <textarea readonly class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48">{generatedDescription}</textarea>
      <button on:click={copyToClipboard} class="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Copy to Clipboard
      </button>
    </div>
  {/if}
</div>