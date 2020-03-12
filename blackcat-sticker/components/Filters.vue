<template>
<div class="filters">
    <LineBreaker :label="imgText"></LineBreaker>
    <Loader></Loader>
    <LineBreaker :label="stickerText"></LineBreaker>
    <StickerPicker></StickerPicker>
    <LineBreaker :label="labelText"></LineBreaker>
    <LabelPicker></LabelPicker>
</div>
</template>

<script>
import Loader from './Loader'
import LineBreaker from './LineBreaker'
import LabelPicker from './LabelPicker'
import StickerPicker from './StickerPicker'
export default {
    components: {
        Loader,
        LineBreaker,
        LabelPicker,
        StickerPicker
    },
    data(){
        return{
            imgText: "Choose a picture",
            stickerText: 'Pick a sticker',
            labelText: 'Choose a label'
        }
    }
}
</script>

<style scoped>
.filters{
    padding: 20px 5%;
    width: 93%;
    margin: 20px 3%;
    background: white;
    border: 1px solid orange;
    border-radius: 15px;
    min-width: 200px;
    
}
</style>