<template>
  <div class="photo-root">
    <img :src="getSrc" class="img" v-if="getSrc"/>
    <div v-else class="upload-img">
      IMAGE
    </div>
    <div class="canvas" id="labelbox" @mousemove="move">
      <p v-for="(label, i) in getLabels"
       :key="i"
       :id="'labeltarget_' + i"
       class="canvas-element"
       :style="{ left: label.x, top: label.y, color: label.labelColor, 'font-family': label.labelFont}"
       @contextmenu.prevent="deleteLabel(i)"
       @mousedown="down()"
       @mouseup="up">
        {{ label.labelText }}
      </p>
      <div v-for="(sticker,index) in getStickers" :key="index + 1" 
        :style="{ left: sticker.x, top: sticker.y, opacity: sticker.imgOpacity}"
        class="canvas-element"
        draggable="false"
        @contextmenu.prevent="deleteSticker(index)"
        @mousedown="down()"
        @mouseup="up">
        <component :is="sticker.sticker"  :id="'stickertarget_' + index"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Happy from './stickers/Happy'
import Suspicious from './stickers/Suspicious'
import Toungue from './stickers/Toungue'
export default {
  components:{
    Happy,
    Suspicious,
    Toungue
  },
    data(){
      return{
        allowMove: false,
        menu: {
          allow: false,
          x: 0,
          y: 0,
        },
      }
    },
    computed: {
        getStickers(){
          return this.$store.state.sticker.stickers
        },  
        getLabels(){
          return this.$store.state.label.labels
        },
        getSrc(){
          return this.$store.state.image.croppedImg
        },
    },
    methods:{
      getBoundaries(element){
        let labelElement = document.getElementById('labelbox').getBoundingClientRect()
        let label = document.getElementById(element).getBoundingClientRect()
        return {
          right: labelElement.width - label.width,
          left: 0,
          top: labelElement.height - label.height,
          bottom: 0,
        }
      },
      respectBoundaries(e, element){
          if(this.allowMove){
          let labelElement = document.getElementById('labelbox').getBoundingClientRect()
          let label = document.getElementById(element).getBoundingClientRect()
          let shiftX = e.clientX - labelElement.left - (label.width / 2)
          let shiftY = e.clientY - labelElement.top - (label.height / 2)
          const boundaries = this.getBoundaries(element)
          if(shiftX < boundaries.right 
          && shiftX > boundaries.left
          && shiftY < boundaries.top
          && shiftY > boundaries.bottom){
            let id = element.split('_')
            const coords = {
            index: id[1],
            x: shiftX + 'px',
            y: shiftY  + 'px'
            }
            const l_id = 'labeltarget'
            const s_id = 'stickertarget'
            if(id[0] === l_id){
              this.$store.commit('label/sendXYLabel', coords)
            }
            if(id[0] === s_id){
              this.$store.commit('sticker/sendXYSticker', coords)
            }
          }else{
            this.allowMove = false
          }
        }
      },
      move(){
        this.respectBoundaries(event, event.target.id)
      },
      down(){
        this.respectBoundaries(event, event.target.id)
        this.allowMove = true
      },
      up(){
        this.allowMove = false
      },
      deleteLabel(index){
        this.$store.commit('label/deleteLabel', index) 
      },
      deleteSticker(index){
        this.$store.commit('sticker/deleteSticker', index)
      }
    }
}
</script>

<style scoped lang="scss">
@mixin photo-block {
  width: 100%;
  height: 100%;
}
.photo-root{
    width: 93%;
    margin: 20px 3%;
    position: relative;
}
.img{
  @include photo-block;
  border-radius: 15px;
  border: 1px solid rgb(250, 191, 170);
}
.upload-img{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border: 3px dashed burlywood;
  border-radius: 10px;
  background: rgb(255, 236, 210);
  color:rgb(245, 163, 133);
  font-size: 2rem;
}
.canvas{
  @include photo-block;
  position: absolute;
  top: 0;
  left: 0;
}
.canvas-element{
  cursor: pointer;
  user-select: none;
  position: absolute;
}

</style>