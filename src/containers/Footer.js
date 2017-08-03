import React from 'react'
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'

const Footer = () => {
    return (
        <p>
            show:
            {' '}
            <FilterLink filter="SHOW_ALL">
                SHOW_ALL
            </FilterLink>
            <FilterLink filter="SHOW_COMPLETED">
                SHOW_COMPLETED
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
                SHOW_ACTIVE
            </FilterLink>
        </p>
    )
}

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span style={{margin: '0 20px'}}>{children}</span>
    }
    return (
        <a href="no-hash"
           onClick={e => {
               e.preventDefault()
               onClick()
           }}
           style={{margin: '0 20px'}}
        >
            {children}
        </a>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)


export default Footer