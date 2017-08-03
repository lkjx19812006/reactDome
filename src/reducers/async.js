const asyncData = (state = [], action) => {
    switch (action.type) {
        case 'LIST_DATA':
            return [...state, ...action.data]
        default:
            return state
    }
}
export default asyncData;