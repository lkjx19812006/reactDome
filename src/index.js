import React from "react"
import {render} from "react-dom"

import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"

import {Provider} from "react-redux"

import App from "./components/App"
import Todo from "./components/Todo"
import EasyDemo from "./components/easyDemo"
//action 的异步操作
import AsyncApp from "./components/asyncApp"


import reducer from "./reducers"

const store = createStore(reducer, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <div>
            <App />
            <Todo/>
            <EasyDemo/>
            <AsyncApp/>
        </div>
    </Provider>,
    document.getElementById('root')
)
