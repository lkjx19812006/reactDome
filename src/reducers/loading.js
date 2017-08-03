const loading = (state = "正在加载中...", action) => {
    switch (action.type) {
        case 'LOADING':
            return '正在加载中...'
        case 'LOADED':
            return '加载完毕...'
        default:
            return state
    }
}
export default loading