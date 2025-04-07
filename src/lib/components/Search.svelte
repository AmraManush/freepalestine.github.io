<script>
  import { fade } from 'svelte/transition';
  
  export let boycottList = [];
  
  let searchTerm = "";
  let showSuggestions = false;
  let suggestions = [];

  function handleInput() {
    showSuggestions = searchTerm.length > 0;
    suggestions = boycottList.filter(item => 
      item.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);
  }

  function selectSuggestion(item) {
    searchTerm = item.attributes.name;
    showSuggestions = false;
    dispatch('search', item.attributes.name);
  }
</script>

<div class="input-field">
  <div class="input-container">
    <i class="material-icons input-icon">search</i>
    <input
      bind:value={searchTerm}
      on:input={handleInput}
      class="search-input"
      placeholder="Search for products..."
      aria-label="Product search"
    />
    <div class="input-underline" />
  </div>

  {#if showSuggestions && suggestions.length > 0}
    <div class="suggestions-container" transition:fade>
      {#each suggestions as item}
        <div
          class="suggestion-item"
          on:click={() => selectSuggestion(item)}
          on:keydown={(e) => e.key === 'Enter' && selectSuggestion(item)}
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
  /* Component-specific styles are scoped automatically */
</style>