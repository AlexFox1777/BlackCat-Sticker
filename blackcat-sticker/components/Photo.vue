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
    width: 90%;
    background: white;
    border: 1px solid orange;
    border-radius: 4px;
}
</style>