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
  }

  function selectSuggestion(item) {
    searchTerm = item.attributes.name;
    showSuggestions = false;
    dispatch('selected', item);  // Send the full item object
  }

  function handleKeydown(e, item) {
    if (e.key === 'Enter') {
      selectSuggestion(item);
    }
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