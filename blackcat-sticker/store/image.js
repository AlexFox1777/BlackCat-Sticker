

export const state = () => ({
    imgSrc: false,
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