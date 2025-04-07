<script>
  export let product;
  
  function boldify(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
</script>

<div class="result-container">
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
        <div class="boycott-badge">
          <i class="material-icons">warning</i>
          <span>No Thank You</span>
        </div>
      {/if}
      
      {#if product.attributes.proof}
        <p class="result-description">{@html boldify(product.attributes.proof)}</p>
      {/if}
      
      {#if product.attributes.proofUrl}
        <a 
          href={product.attributes.proofUrl} 
          target="_blank" 
          rel="noopener"
          class="proof-link"
        >
          <i class="material-icons">link</i>
          View Proof
        </a>
      {/if}
    </div>
  </div>
</div>

<style>
  .result-container {
    width: 100%;
    max-width: 600px; /* Match search box width */
    margin: 0 auto;
  }

  .result-card {
    display: flex;
    gap: 1.5rem;
    background-color: var(--surface-color);
    border-radius: var(--border-radius);
    box-shadow: var(--elevation-1);
    padding: 1.5rem;
    width: 100%;
    align-items: center;
  }

  .brand-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: var(--border-radius-sm);
    background-color: var(--surface-variant);
    padding: 8px;
    flex-shrink: 0;
  }

  .result-content {
    flex: 1;
    min-width: 0; /* Prevent overflow */
  }

  .result-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    color: var(--on-surface);
  }

  .result-description {
    color: var(--on-surface);
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .boycott-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background-color: rgba(176, 0, 32, 0.1);
    color: var(--error-color);
    padding: 4px 12px;
    border-radius: 50px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .proof-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
  }

  .proof-link:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .result-card {
      flex-direction: column;
      text-align: center;
    }
    
    .brand-image {
      margin-bottom: 1rem;
    }
  }
</style>