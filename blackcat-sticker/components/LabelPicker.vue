<template>
  <div>
      <form class="form" @submit.prevent>
          <label for="label" class="label">Label name</label>
          <input type="text" id="label" class="field" v-model="labelText" @change="sendLabel"/>
          <h4 class="label">Label color</h4>
          <div class="row">
              <LabelBtn v-for="(color, index) in colors" :label="color" :key="index"></LabelBtn>
          </div>

          <h4 class="label">Label font</h4>
          <div class="row">
              <LabelBtn v-for="(font, index) in fonts" :label="font" :key="index"></LabelBtn>
          </div>
              
      </form>
  </div>
</template>

<script>
import Label from './Label'
export default {
    components: {
        LabelBtn: Label
    },
    methods: {
        sendLabel(){
            this.$store.commit('label/sendLabel', this.labelText)
        }
    },
    data(){
        return{
            labelText: "Bo",
            colors: ['White', 'Black'],
            fonts: ['Alegreya SC', 'Anton', 'Bigelow Rules', 'Cormorant Garamond', 'IM Fell English', 'Londrina Shadow', 'Megrim']
        }
    }
}
</script>

<style scoped lang="scss" >
.form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.field{
    height: 35px;
    padding: 2px 2%;
    width: 40%;
    border-radius: 4px;
    border: 1px solid #2dca6f;
    outline: none;
    margin-bottom: 20px;
    &:hover {
        border: 1.5px solid #1edf6e;
    }
}
.label{
    margin-bottom: 10px;
}
.row{
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
}
</style>