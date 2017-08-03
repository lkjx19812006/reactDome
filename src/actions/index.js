//action 的类型 计算器 加 减

export const addCount = () => ({
    type: 'ADD_COUNT',
})

export const subCount = () => ({
    type: "SUB_COUNT",
})

//todos
let nextTodoId = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})