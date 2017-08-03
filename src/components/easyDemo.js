import React from 'react'
import {connect} from 'react-redux'

//该文件下有 action dispatch reducer
const EasyDemo = ({text, dispatch}) => {

    let input
    return (
        <div>
            <h2>简单的dome 测试redux的执行流程</h2>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(changCont(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node}/>
                <button type="submit">
                    修改内容
                </button>
            </form>
            <h2>{text}</h2>
        </div>
    )
}

//action
const changCont = (text) => ({
    type: 'CHANG_CONT',
    text
})
const mapStateToProps = (state) => ({
    text: state.changeCont
})
export default connect(mapStateToProps)(EasyDemo)