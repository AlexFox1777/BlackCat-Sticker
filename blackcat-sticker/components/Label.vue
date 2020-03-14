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

<style scoped lang="scss">
.label{
    background: coral;
    padding: 8px 10px;
    margin: 0 10px 10px 0;
    border: none;
    border-radius: 20px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    &:hover{
        background: rgb(255, 97, 40);
        color: rgb(255, 255, 255);
    }
}
</style>