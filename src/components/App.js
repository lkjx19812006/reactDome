import  React from 'react'
import {connect} from 'react-redux'
import {addCount, subCount} from '../actions/index'

const App = ({value, onAddClick, onSubClick}) => {
    return (
        <div>
            <h1>redux计数器</h1>
            <h1>{value}</h1>
            <button onClick={onAddClick}>+</button>
            <button onClick={onSubClick}>-</button>
        </div>
    )
}

//state 必传 这里的 ownProps表示组件本身的Props对象
//即 如果该容器组件作为其他组件的子组件时 传入Props对象
const mapStateToProps = (state, ownProps) => {
    return {
        value: state.count.count
    }
}

//dispath必传 ownProps 表示组件本身的Props对象
//即 如果该容器组件作为其他组件的子组件时 传入Props对象 同上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddClick: () => {
            dispatch(addCount())
        },
        onSubClick: () => {
            dispatch(subCount())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);