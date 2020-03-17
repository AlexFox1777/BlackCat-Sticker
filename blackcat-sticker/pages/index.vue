<template>
  <section class="container">
    <Photo class="f-item1"></Photo>
    <Filters class="f-item2"></Filters>
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

<style lang="scss" >
$breakpoint-tablet: 768px;

@media (max-width: $breakpoint-tablet) {
  .f-item1{
    order: 1
  }
  .container{
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: $breakpoint-tablet){
  .container{
    align-items: flex-start;
  }
}

.container {
  margin-top: 100px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

</style>

