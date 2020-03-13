<template>
    <div> 
        <div class="modal">
            <h4 class="title">↓Crop your image↓</h4>
            <img :src="getSrc" class="img" ref="image" />
        </div>
         <button @click="sendImg" class="btn">Submit</button>
    </div>
</template>

<script>
import Cropper from 'cropperjs'
export default {
    computed: {
        getSrc(){
            return this.$store.state.image.imgSrc
        }
    },
    data(){
        return{
            cropper: {},
            destination: {},
            canvas: {},
            image: {}
        }
    },
    methods:{
        sendImg(){
            this.$store.commit('image/sendCroppedImg', this.destination)
        }
    },
    mounted(){
        this.image = this.$refs.image
        this.cropper = new Cropper(this.image, {
            zoomable: false,
            scalable: false,
            minCropBoxWidth: 50,
            aspectRatio: 1,
            crop: () => {
                const canvas = this.cropper.getCroppedCanvas();
                this.destination = canvas.toDataURL("image/png");
            }
        })
    }
}
</script>

<style scoped lang="scss">

.title{
    margin-bottom: 10px;
}

.modal{
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img{
    width: 50%;
    height: auto;
}

.btn{
    font-size: 1rem;
    width: 100%;
    border: none;
    background: rgb(123, 219, 123);
    outline: none;
    padding: 10px;
    &:hover{
        background: rgb(103, 199, 103); 
    }
}

</style>