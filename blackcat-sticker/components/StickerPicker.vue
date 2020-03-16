<template>
<div class="sticker">
    <div class="row">
        <!-- Sticker list component -->
        <div class="sticker-list">
            <img v-for="(cat, index) in cats"  :src="cat" :key="index" @click="sendSticker(cat)" />
        </div>
    </div>
    <!-- Opacity component -->
    <div class="slider-container">
        <h4>Image Opacity</h4>
        <div class="slider">
            <input type="range" min="0" v-model="imgOpacity" max="1" step="0.01" name="opacity">
        </div>
    </div>
</div>
</template>

<script>
export default {
methods: {
    sendSticker(img){
        let sticker = {
            sticker: img,
            x: '50%',
            y: '50%',
        }
        this.$store.commit('sticker/sendSticker', sticker)
    },
},
data(){
    return{
        imgOpacity: 0.8,
        cats: ['/favicon.ico', '/favicon.ico', '/favicon.ico' ,'/favicon.ico']
    }
}
}
</script>

<style scoped lang="scss">
.sticker{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.slider-container{
    width: 100%;
    text-align: left;
}
.slider input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    background: rgb(112, 45, 219);
    height: 5px;
    outline: none;
}
.slider input::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: coral;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
// sticker list styles 
.sticker-list{
    border: 1px solid coral;
    border-radius: 4px;
    width: 100%;

}
.row{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}

</style>