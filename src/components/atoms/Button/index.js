import React from 'react'
import './button.scss'

const Button = ({title,width,height, ...rest}) => {
    return (
            <button className="button" style={{width,height}} {...rest}>{title}</button>
    )
}

export default Button
