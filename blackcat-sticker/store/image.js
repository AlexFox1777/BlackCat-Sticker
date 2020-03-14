

export const state = () => ({
    imgSrc: "",
    croppedImg: "",
})

export const mutations = {
    handleSrc(state, src){
        state.imgSrc = src
    },
    sendCroppedImg(state, src){
        state.croppedImg = src
    },
}

export const getters = {
    imgSrc(state){
        return state.imgSrc
    }
}