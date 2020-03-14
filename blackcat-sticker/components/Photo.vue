<template>
  <div class="photo">
    <img :src="getSrc" class="img"/>
    <div class="canvas" @dragover="allowDrop" @drop="drop" id="labelbox">
      <p id="labeltarget"
       :style="{position: 'absolute', left: getX, top: getY}"
       @mousedown="down"
       draggable="true">
        {{ getLabel }}
        </p>
    </div>
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
        },
        getX(){
          return this.$store.state.label.x
        },
        getY(){
          return this.$store.state.label.y
        }
    },
    methods:{
      dragStart(e){
        e.dataTransfer.setData('Label', e.target.id)
      },
      allowDrop(e){
        e.preventDefault()
      },
      moveAt(e, pageX, pageY){
        let labelElement = document.getElementById('labelbox').getBoundingClientRect()
        let shiftX = e.clientX - labelElement.left;
        let shiftY = e.clientY - labelElement.top;
        const coords = {
          x: shiftX + 'px',
          y: shiftY + 'px'
        }
        this.$store.commit('label/sendXYLabel', coords)
      },
      move(e){
         this.moveAt(e.pageX, e.pageY)  
      },
      down(e){
        let labelElement = document.getElementById('labelbox').getBoundingClientRect()
        let shiftX = e.clientX - labelElement.left;
        let shiftY = e.clientY - labelElement.top;
        console.log('clientX ', e.clientX, '; clientY ', e.clientY)
        console.log('shiftX ', shiftX ,'; shiftY ', shiftY)
        console.log('pageX ', e.pageX, '; pageY ', e.pageY)
        const coords = {
          x: shiftX + 'px',
          y: shiftY  + 'px'
        }
        this.$store.commit('label/sendXYLabel', coords)
        document.addEventListener('mousemove', this.move);

      }
    }
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