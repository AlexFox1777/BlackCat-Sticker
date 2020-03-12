<template>
  <div>
      <h4 class="label">{{ label }}</h4>
      <hr class="line">
  </div>
</template>

<script>
export default {
    props: {
        label: String,
    }
}
</script>

<style scoped>
.label{
    text-align: left;
    padding: 10px 0;
    margin-top: 20px;
}
.line{
    background-color: orange;
    border:none;
    height: 1px;
    margin-bottom: 20px;
}
</style>