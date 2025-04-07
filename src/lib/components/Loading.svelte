<script>
    export let size = 'large'; // 'small' | 'medium' | 'large'
  </script>
  
  <div class="loading-indicator">
    <div class="progress-container {size}">
      <div class="progress-bar" />
    </div>
  </div>
  
  <style>
    .progress-container.small {
      max-width: 200px;
    }
    .progress-container.medium {
      max-width: 400px;
    }
    .progress-container.large {
      max-width: 600px;
    }
  </style>