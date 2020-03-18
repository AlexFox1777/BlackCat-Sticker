
export const state = () =>({
    labels: [],
})

export const mutations = {
    sendLabel(state, data){
        state.labels.push(data)
    },
    deleteLabel(state, index){
        const new_labels = state.labels.filter((item, item_index) => item_index !== index)
        state.labels = new_labels
    },
    sendXYLabel(state, data){
        const index = data.index
        const label_obj = state.labels[index]
        label_obj.x = data.x
        label_obj.y = data.y
    },
    reset(state){
        state.labels = []
    }
}
