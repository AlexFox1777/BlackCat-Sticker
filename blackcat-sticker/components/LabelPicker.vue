<template>
  <div>
      <form class="form" @submit.prevent>
          <h4 class="label">Label name</h4>
          <div class="settings">      
            <input type="text" id="label" class="field" v-model="labelText"/>
            <button class="settings-btn" @click="sendLabel">Add</button>
            <p class="settings-item">{{ labelColor }}</p>
            <p class="settings-item" :style="{fontFamily: labelFont}">{{ labelFont }}</p>
          </div>
          <h4 class="label">Label color</h4>
          <div class="row">
              <LabelBtn v-for="(color, index) in colors" :label="color" :key="index" @pick-label="pickColor(color)"></LabelBtn>
          </div>

          <h4 class="label">Label font</h4>
          <div class="row">
              <LabelBtn v-for="(font, index) in fonts" :label="font" :key="index" @pick-label="pickFont(font)"></LabelBtn>
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
    data(){
        return{
            labelText: "EXAMPLE",
            labelColor: 'black',
            labelFont: 'Montserrat',
            colors: ['White', 'Black'],
            fonts: ['Alegreya SC', 'Anton', 'Bigelow Rules', 'Cormorant Garamond', 'IM Fell English', 'Londrina Shadow', 'Megrim']
        }
    },
    methods: {
        pickColor(color){
            this.labelColor = color.toLowerCase()
        },
        pickFont(font){
            this.labelFont = font
        },
        sendLabel(){
            let label = {
                labelText: this.labelText,
                labelFont: this.labelFont,
                labelColor: this.labelColor,
                x: '50%',
                y: '50%',
            }
            this.$store.commit('label/sendLabel', label)
        },
    },
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
    min-width: 80px;
    border-radius: 4px;
    border: 1px solid #2dca6f;
    outline: none;
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
.settings{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
}

.settings-item{
    border: 1px solid black;
    border-radius: 30px;
    white-space: nowrap;
    padding: 4px;
    margin: 10px 5px 10px 0;
}
.settings-btn{
    min-width: 60px;
    padding: 10px 3%;
    margin: 0 5px;
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
</style>