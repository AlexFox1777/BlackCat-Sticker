<template>
  <section class="container">
    <Photo ></Photo>
    <Filters ></Filters>
  </section>
</template>

<script>
import Filters from '../components/Filters'
import Photo from '../components/Photo'
export default {
  components: {
    Filters,
    Photo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container:nth-child(1){
  order: 2;
}
.container:nth-child(2){
  order: 1;
}
h4{
  font-weight: normal;
}
</style>

