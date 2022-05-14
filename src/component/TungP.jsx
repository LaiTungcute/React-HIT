import React from 'react'
import PropTypes from 'prop-types'

//props, propsType, children, defaultProps
const TungP = props => {
    const {name, handleClick} = props;
    return (
    <div>
        <h1>{name}</h1>
        {props.children} 
        <h1>{props.Text}</h1>
        <button onClick={handleClick}>Set Name</button>
    </div>
  )
}

TungP.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.string
}

TungP.defaultProps = {
    Text: 'Lai Hoang Tung'
}

export default TungP