<template>
  <div class="photo">
    <img :src="getSrc" class="img"/>
    <div class="canvas">{{ getLabel }}</div>
  </div>
</template>

<script>
export default {
    computed: {
        getSrc(){
            return this.$store.state.image.croppedImg
        },
        getLabel(){
          return this.$store.state.label.labelText
        }
    },
}
</script>

<style scoped lang="scss">
@mixin photo-block {
  width: 100%;
  height: 100%;
}
.photo{
    width: 93%;
    margin: 20px 3%;
    position: relative;
}
.img{
  @include photo-block;
  border-radius: 15px;
  border: 1px solid rgb(250, 191, 170);
}
.canvas{
  @include photo-block;
  position: absolute;
  top: 0;
  left: 0;
}
</style>