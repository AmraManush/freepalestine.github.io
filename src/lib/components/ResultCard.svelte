<script>
  export let product;
  
  function boldify(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
</script>

{#if product}
  <div class="result-card">
    <img 
      src={product.attributes.imageUrl} 
      alt={product.attributes.name}
      class="brand-image"
      loading="lazy"
    />
    <div class="result-content">
      <h3 class="result-title">{product.attributes.name}</h3>
      
      {#if product.attributes.boycotted}
        <div class="Proof">No Thank You</div>
      {/if}
      
      {#if product.attributes.proof}
        <p class="result-description">{@html boldify(product.attributes.proof)}</p>
      {/if}
      
      {#if product.attributes.proofUrl}
        <a 
          href={product.attributes.proofUrl} 
          target="_blank" 
          rel="noopener"
          class="Proof"
        >
          View Proof
        </a>
      {/if}
    </div>
  </div>
{/if}