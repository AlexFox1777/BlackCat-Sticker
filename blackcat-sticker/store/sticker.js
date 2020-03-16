
export const state = () =>({
    stickers: [],
})

export const mutations = {
    sendSticker(state, data){
        state.stickers.push(data)
    },
    sendXYSticker(state, data){
        const index = data.index
        const sticker_obj = state.stickers[index]
        sticker_obj.x = data.x
        sticker_obj.y = data.y
    }
}
