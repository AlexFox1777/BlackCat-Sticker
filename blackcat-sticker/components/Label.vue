<template>
  <button class="label">
      {{ label }}
  </button>
</template>

<script>
export default {
props:{
    label: String
}
}
</script>

<style scoped>
.label{
    background: orange;
    padding: 8px 10px;
    margin: 0 2px;
    border: none;
    border-radius: 20px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
}
</style>