import {combineReducers} from 'redux'
import count from './count'
import todos from  './todo'
import visibilityFilter from './visibilityFilter'
import changeCont from './changeCont'
import asyncData from './async'
import loading from './loading'

const countApp = combineReducers({
    count,
    todos,
    visibilityFilter,
    changeCont,
    asyncData,
    loading
})

export default countApp
