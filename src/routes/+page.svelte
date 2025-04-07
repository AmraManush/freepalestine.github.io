<script>
  import Search from '$lib/components/Search.svelte';
  import ResultCard from '$lib/components/ResultCard.svelte';
  import Loading from '$lib/components/Loading.svelte';
  import Fab from '$lib/components/Fab.svelte';
  
  import granddata from '$lib/data/granddata.json';
  
  let selectedProduct = null;
  let isLoading = false;
  let searchQuery = '';

  const boycottList = granddata;

  function handleSearch(term) {
    searchQuery = term;
    isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      selectedProduct = boycottList.find(item => 
        item.attributes.name.toLowerCase().includes(term.toLowerCase())
      );
      isLoading = false;
    }, 500);
  }
</script>

<header class="app-header">
  <h1 class="app-title">
    <span class="TitreGreen">No blood</span> 
    <span class="TitreRed">in</span> 
    <span class="TitreBlack">my cart</span>
  </h1>
  <p class="app-subtitle">Check products for ethical sourcing</p>
</header>

<main class="main-content">
  <Search {boycottList} on:search={handleSearch} />
  
  {#if isLoading}
    <Loading />
  {:else if selectedProduct}
    <ResultCard product={selectedProduct} />
  {:else if searchQuery && !isLoading && !selectedProduct}
    <div class="alert">
      No results found for "{searchQuery}"
    </div>
  {/if}
</main>

<Fab icon="info" on:click={() => alert('About this app')} />

<style>
  .alert {
    padding: 1rem;
    background-color: var(--surface-variant);
    border-radius: var(--border-radius-sm);
    margin-top: 1rem;
  }
</style>