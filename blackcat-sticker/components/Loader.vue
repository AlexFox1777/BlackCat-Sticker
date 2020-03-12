<template>
  <div>
      <form class="form">
            <input id="loader" name="loader"
             type="file" @change="handleFile"
             accept="image/png, image/jpeg"
             style="display:none;"/>
             <label for="loader"
              class="field" >
                 upload image
            </label>
      </form>
  </div>
</template>

<script>
export default {
    methods: {
        handleFile(e){
            console.log('file ', e.target.files)
            let imgSrc = URL.createObjectURL(event.target.files[0]);
            this.$store.commit('image/handleSrc', imgSrc)
        }
    },
    computed: {
        getSrc(){
            return this.$store.state.image.imgSrc
        }
    }
}
</script>

<style scoped>
.form{
    text-align: left;
    margin-top: 10px;
}
.field{
    padding: 10px 3%;
    background:rgb(216, 70, 192);
    color: white;
    border-radius: 4px;
    text-transform: uppercase;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: none;
}
.field::after{
    content: '+';
    font-weight: bold;
    font-size: 1.2rem;
}


</style>