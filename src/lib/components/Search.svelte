<script>
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let boycottList = [];
  
  let searchTerm = "";
  let showSuggestions = false;
  let suggestions = [];

  function handleInput() {
    showSuggestions = searchTerm.length > 0;
    suggestions = boycottList.filter(item => 
      item.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);
    
    // Dispatch clear event when search is empty
    if (searchTerm.length === 0) {
      dispatch('clear');
    }
  }

  function selectSuggestion(item) {
    searchTerm = item.attributes.name;
    showSuggestions = false;
    dispatch('selected', item);
  }

  function handleKeydown(e, item) {
    if (e.key === 'Enter') {
      selectSuggestion(item);
    }
  }

  // Add a clear function
  function clearSearch() {
    searchTerm = "";
    showSuggestions = false;
    dispatch('clear');
  }
</script>

<div class="input-field">
  <div class="input-container">
    <i class="material-icons input-icon"></i>
    <input
      bind:value={searchTerm}
      on:input={handleInput}
      class="search-input"
      placeholder="Search for products..."
      aria-label="Product search"
    />
    {#if searchTerm}
      <button class="clear-button" on:click={clearSearch}>
        <i class="material-icons">close</i>
      </button>
    {/if}
    <div class="input-underline" />
  </div>

  {#if showSuggestions && suggestions.length > 0}
    <div class="suggestions-container" transition:fade>
      {#each suggestions as item (item.id)}
        <div
          class="suggestion-item"
          on:click={() => selectSuggestion(item)}
          on:keydown={(e) => handleKeydown(e, item)}
          role="button"
          tabindex="0"
        >
          <i class="material-icons suggestion-icon">search</i>
          {item.attributes.name}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* Add to your existing styles */
  .clear-button {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--outline);
    cursor: pointer;
    z-index: 2;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clear-button:hover {
    color: var(--on-surface);
  }
</style>