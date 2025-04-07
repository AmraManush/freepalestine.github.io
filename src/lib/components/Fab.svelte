<script>
    export let icon = 'add';
    export let label = '';
  </script>
  
  <button class="fab" aria-label={label || icon}>
    <i class="material-icons">{icon}</i>
  </button>