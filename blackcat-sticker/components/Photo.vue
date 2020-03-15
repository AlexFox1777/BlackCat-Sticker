<template>
  <div class="photo-root">
    <img :src="getSrc" class="img"/>
    
    <div class="canvas" id="labelbox" @mousemove="move">
      <p v-for="(label, i) in getLabels"
       :key="i"
       :id="'labeltarget_' + i"
       class="canvas-element"
       :style="{ left: label.x, top: label.y}"
       @mousedown="down(i)"
       @mouseup="up">
        {{ label.labelText }}
      </p>
    </div>

  </div>
</template>

<script>
export default {
    data(){
      return{
        allowMove: false,
      }
    },
    computed: {
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
            const coords = {
            index: element.split('_')[1],
            x: shiftX + 'px',
            y: shiftY  + 'px'
            }
            this.$store.commit('label/sendXYLabel', coords)
          }else{
            this.allowMove = false
          }
        }
      },
      move(){
        this.respectBoundaries(event, event.target.attributes.id.value)
      },
      down(i){
        this.respectBoundaries(event, `labeltarget${i}`)
        this.allowMove = true
      },
      up(e){
        this.allowMove = false
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