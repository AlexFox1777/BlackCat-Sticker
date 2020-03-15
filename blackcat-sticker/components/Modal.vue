<template>
<transition name="modal">
    <div v-show="modalState"> 
        <div class="modal">
            <h4 class="title">↓Crop your image↓</h4>
            <img :src="getSrc" class="img" ref="image" @change="setupCropper"/>
        </div>
        <button @click="sendImg" class="btn">Submit</button>
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
        setupCropper(){
            this.image = this.$refs.image
            this.cropper = new Cropper(this.image, {
                zoomable: false,
                scalable: false,
                minCropBoxWidth: 50,
                aspectRatio: 1,
                crop: () => {
                    const canvas = this.cropper.getCroppedCanvas();
                    this.destination = canvas.toDataURL("image/png");
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

.modal-enter, .modal-leave-to{
    opacity: 0;
    transform: translate3d(0px, -50px, 0);
}

.modal-enter-active, .modal-leave-active{
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

</style>