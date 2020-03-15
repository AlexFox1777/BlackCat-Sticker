
export const state = () =>({
    labels: [],
})

export const mutations = {
    sendLabel(state, data){
        state.labels.push(data)
    },
    sendXYLabel(state, data){
        const index = data.index
        const label_obj = state.labels[index]
        label_obj.x = data.x
        label_obj.y = data.y
    }
}
