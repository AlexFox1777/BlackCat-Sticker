<template>
  <div class="photo">
    <img :src="getSrc" />
  </div>
</template>

<script>
export default {
    computed: {
        getSrc(){
            return this.$store.state.image.imgSrc
        }
    }
}
</script>

<style scoped>
.photo{
    width: 93%;
    margin: 20px 3%;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>