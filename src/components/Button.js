import React from 'react'

const Button = ({color, text}) => {

    const onClick=()=>{
        console.log('clicked')
    }

    return (
    <button style={{backgroundColor:color}}
    onClick={onClick}
    className='btn'>{text}</button>
    )
}

Button.defaultProps={
    color:'steelblue'
}

export default Button
