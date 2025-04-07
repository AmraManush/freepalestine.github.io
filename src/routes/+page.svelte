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

  function handleSelection(event) {
    selectedProduct = event.detail;
    searchQuery = event.detail.attributes.name;
  }

  function handleClear() {
    selectedProduct = null;
    searchQuery = '';
  }

  function showAbout() {
    alert("This app helps you check products for ethical sourcing");
  }
</script>

<div class="container">
  <header class="app-header">
    <h1 class="app-title">
      <span class="TitreGreen">No blood</span> 
      <span class="TitreRed">in</span> 
      <span class="TitreBlack">my cart</span>
    </h1>
    <p class="app-subtitle">Check products for ethical sourcing</p>
  </header>

  <main class="main-content">
    <Search {boycottList} on:selected={handleSelection} on:clear={handleClear} />
    
    {#if isLoading}
      <Loading />
    {:else if selectedProduct}
      <ResultCard product={selectedProduct} />
    {:else if searchQuery && !isLoading && !selectedProduct}
      <div class="alert">
        No boycott information found for "{searchQuery}"
      </div>
    {:else}
      <div class="empty-state">
        <i class="material-icons">search</i>
        <p>Search for a product to check its ethical status</p>
      </div>
    {/if}
  </main>

  <footer class="app-footer">
    <p>Ethical consumption matters. Check before you buy.</p>
  </footer>

  <!-- <Fab icon="info" on:click={showAbout} /> -->
</div>

<style>
  .alert {
    padding: 1rem;
    background-color: var(--surface-variant);
    border-radius: var(--border-radius-sm);
    margin-top: 1rem;
    text-align: center;
    color: var(--on-surface);
    animation: fadeIn 0.3s ease-out;
  }

  .empty-state {
    text-align: center;
    margin-top: 2rem;
    color: var(--outline);
    animation: fadeIn 0.5s ease-out;
  }

  .empty-state .material-icons {
    font-size: 3rem;
    color: var(--primary-light);
    margin-bottom: 1rem;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>