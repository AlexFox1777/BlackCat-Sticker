<template>
  <section class="container">
    This is a home page
    <Filters></Filters>
  </section>
</template>

<script>
import Filters from '../components/Filters'
export default {
  components: {
    Filters
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

