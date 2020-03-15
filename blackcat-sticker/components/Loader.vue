<template>
  <div>
      <form class="form" @submit.prevent>
            <input id="loader" name="loader"
             type="file" @change="handleFile"
             accept="image/png, image/jpeg"
             style="display:none;"/>
             <label for="loader"
              class="field" >
                 upload image
            </label>
      </form> 
      <Modal v-if="modalActive"></Modal>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
    components:{
        Modal,
    },
    computed: {
         getSrc(){
            return this.$store.state.image.imgSrc
        }
    },
    data(){
        return{
            modalActive: false
        }
    },
    methods: {
        handleFile(e){
            let imgSrc = URL.createObjectURL(event.target.files[0]);
            this.$store.commit('image/handleSrc', imgSrc)
            this.modalActive = true
        },
    },
}
</script>

<style scoped lang="scss" >
.form{
    text-align: left;
    margin-top: 10px;
    margin-bottom: 20px;
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
    &:hover {
        background:rgb(177, 48, 155);
    }
}
.field::after{
    content: '+';
    font-weight: bold;
    font-size: 1.2rem;
}


</style>