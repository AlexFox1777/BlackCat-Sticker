<template>
  <div>
      <form>
          <label for="loader">Select a file:
            <input id="loader" name="loader"
             type="file" @change="handleFile"
             accept="image/png, image/jpeg" />
          </label>
      </form>
      <img :src="srcImg" />
  </div>
</template>

<script>
export default {
    data(){
        return{
            srcImg: "",
        }
    },
    methods: {
        handleFile(e){
            console.log('file ', e.target.files)
            this.srcImg = URL.createObjectURL(event.target.files[0]);
        }
    }
}
</script>

<style>

</style>