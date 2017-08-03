//todolist
import React from 'react'
import AddTodo from '../containers/AddTodo'
import List from '../containers/List'
import  Footer from '../containers/Footer'

const Todo = () => {
    return (
        <div>
            <AddTodo/>
            <List/>
            <Footer/>
        </div>
    )
}

export default Todo;