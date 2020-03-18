<template>
  <div class="container">
    <div class="article">
      <h3 class="title">1. Upload the image</h3>
      <img src="upload-img.png" class="img"/>

      <h3 class="title-b">2. Choose the sticker</h3>
      <img src="picksticker-img.png" class="img"/>

      <h3 class="title-b">3. Pick the label</h3>
      <img src="labelpicker-img.png" class="img"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.article{
   width: 80%;
}
.title{
  text-align: left;
  color: white;
  margin-bottom: 30px;
  white-space: nowrap;
}
.title-b{
   text-align: left;
   margin: 30px 0;
   white-space: nowrap;
}
.img{
  width: 100%;
  border: 2px solid coral;
  border-radius: 10px;
}
</style>