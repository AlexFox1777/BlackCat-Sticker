
export const state = () =>({
    stickers: [],
})

export const mutations = {
    sendSticker(state, data){
        state.stickers.push(data)
    },
    deleteSticker(state, index){
        const new_stickers = state.stickers.filter((item, item_index) => item_index !== index)
        state.stickers = new_stickers
    },
    sendXYSticker(state, data){
        const index = data.index
        const sticker_obj = state.stickers[index]
        sticker_obj.x = data.x
        sticker_obj.y = data.y
    },
    reset(state){
        state.stickers = []
    }
}
