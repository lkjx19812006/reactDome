//redux 异步操作代码
import React, {Component} from  'react'
import common from '../common/common'
import {connect} from 'react-redux'
class AsyncApp extends Component {
    constructor(props) {
        super(props)
        console.log(props)

    }

    componentDidMount() {
        console.log('DOM渲染完成')
        common.commonGet('/list.json').then((suc) => {
            console.log(suc);
        })
    }

    render() {
        return (
            <div>
                <button onClick={e => {
                    this.props.dispatch(addAsy())
                }}>数值异步加1
                </button>
                <button onClick={e => {
                    this.props.dispatch(getData('/list.json'))
                }}>
                    异步获取数据
                </button>
                <p>{this.props.text}</p>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title}
                            </li>
                        )
                    })
                }
            </div>

        )
    }
}
//简单的异步操作 action creator (操作生成函数) 生成一个函数 传递给dispatch
//由于dispatch 传入一个对象 现在通过 react-thunk 中间件可以传入一个函数
const addAsy = () => (dispatch, getstate, delay = 2000) => {
    console.log(dispatch, getstate, delay)
    dispatch({type: 'LOADING'})
    return setTimeout(() => {
        dispatch({type: 'ADD_COUNT'})
        dispatch({type: 'LOADED'})
    }, delay)
}
//
const getData = url => (dispatch, getState) => {
    //执行一个dispatch
    dispatch({type: 'LOADING'})//正在加载中
    return common.commonGet(url).then((suc) => {
        dispatch({type: 'LIST_DATA', data: suc})
        dispatch({type: 'LOADED'})
    })
}

const mapStateToProps = (state) => {
    return {
        text: state.loading,
        list: state.asyncData
    }
}
export default connect(mapStateToProps)(AsyncApp)