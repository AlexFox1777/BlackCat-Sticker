
export const state = () =>({
    labelText: "Bobo",
    labelFont: 'Montserrat',
    x: 0,
    y: 0,
})

export const mutations = {
    sendLabel(state, data){
        state.labelText = data
    },
    sendFont(state, font){
        state.labelFont = font
    },
    sendXYLabel(state, data){
        state.x = data.x
        state.y = data.y
    }
}
