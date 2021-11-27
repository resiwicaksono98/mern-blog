import React from 'react'
import './link.scss'

const Link = ({ title, onClick, ...rest }) => {
    return (
        <p className="link" onClick={onClick} style={{...rest}}>{title}</p>
    )
}

export default Link
