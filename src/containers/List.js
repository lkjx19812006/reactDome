import  React  from 'react'
import {connect} from 'react-redux'
import {toggleTodo} from '../actions/index'

const List = ({list, dispatch}) => {
    return (
        <ul>
            {
                list.map((item) => {
                    return (
                        <li onClick={e => {
                            e.preventDefault()
                            dispatch(toggleTodo(item.id))
                            return false
                        }}
                            key={item.id}
                            style={{
                                cursor: 'pointer',
                                textDecoration: item.completed ? 'line-through' : 'none'
                            }}
                        >
                            {item.text}
                        </li>
                    )
                })
            }
        </ul>
    )
}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => {
    return {
        list: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

export default connect(mapStateToProps)(List);