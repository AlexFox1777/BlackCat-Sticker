

export const state = () => ({
    imgSrc: ""
})

export const mutations = {
    handleSrc(state, src){
        state.imgSrc = src
    }
}

export const getters = {
    imgSrc(state){
        return state.imgSrc
    }
}