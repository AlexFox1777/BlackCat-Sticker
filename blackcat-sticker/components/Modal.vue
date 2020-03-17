<template>
<transition name="modal">
    <div v-show="modalState"> 
        <div class="modal">
            <h4 class="title">↓Crop your image↓</h4>
            <img :src="getSrc" class="img" ref="image" @change="setupCropper"/>
        </div>
        <button @click="sendImg" class="sbm-btn" >Submit</button>
        <button @click="sendPreview" class="prv-btn">Preview</button>
    </div>
</transition>
</template>

<script>
import Cropper from 'cropperjs'
export default {
    computed: {
        getSrc(){
            return this.$store.state.image.imgSrc
        }
    },
    props: {
        modalState: Boolean
    },
    data(){
        return{
            cropper: {},
            destination: {},
            canvas: {},
            image: {},
        }
    },
    methods: {
        sendImg(){
            this.$emit('disable-modal')
            this.$store.commit('image/sendCroppedImg', this.destination)
        },
        sendPreview(){
            this.$store.commit('image/sendCroppedImg', this.destination)
        },
        setupCropper(){
            this.image = this.$refs.image
            this.cropper = new Cropper(this.image, {
                zoomable: false,
                scalable: false,
                minCropBoxWidth: 50,
                aspectRatio: 1,
                crop: () => {
                    const canvas = this.cropper.getCroppedCanvas({
                        maxWidth: 3072,
                        maxHeight: 3072,
                        imageSmoothingEnabled: true,
                        imageSmoothingQuality: 'high',
                        fillColor: '#fff',
                    })
                    canvas.toBlob(
                    blob => {
                        // sending blob to server functionality here
                    this.destination = canvas.toDataURL('image/jpeg', 1);
                    }, 'image/jpeg', 1);
                },
            })
        },  
    },
    mounted(){
        this.setupCropper()
    },
    updated(){
        this.cropper.destroy()
        this.setupCropper()
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

@mixin btn{
    font-size: 1rem;
    width: 41%;
    display: inline-block;
    border: none;
    outline: none;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
}

.prv-btn{
    background: rgb(123, 219, 123);
    @include btn();
    &:hover{
        background: rgb(103, 199, 103); 
    }
}

.sbm-btn{
    background: coral;
    @include btn();
    &:hover{
        background: rgb(255, 97, 40);
    }
}

.modal-enter, .modal-leave-to{
    opacity: 0;
    transform: translate3d(0px, -50px, 0);
}

.modal-enter-active, .modal-leave-active{
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

</style>