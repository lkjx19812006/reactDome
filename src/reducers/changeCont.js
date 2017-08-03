const changeCont = (state = "我是初始值", action) => {
    switch (action.type) {
        case 'CHANG_CONT':
            return action.text
        default:
            return state
    }
}
export default changeCont