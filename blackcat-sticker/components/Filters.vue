<template>
<div class="filters">
    <LineBreaker :label="imgText"></LineBreaker>
    <Loader></Loader>
    <LineBreaker :label="stickerText"></LineBreaker>
    blabla
    <LineBreaker :label="labelText"></LineBreaker>
    <LabelPicker></LabelPicker>
</div>
</template>

<script>
import Loader from './Loader'
import LineBreaker from './LineBreaker'
import LabelPicker from './LabelPicker'
export default {
    components: {
        Loader,
        LineBreaker,
        LabelPicker
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
    width: 90%;
    background: white;
    border: 1px solid orange;
    border-radius: 4px;
}
</style>