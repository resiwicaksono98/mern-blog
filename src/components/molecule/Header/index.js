import React from 'react'
import { useNavigate } from 'react-router'
import './header.scss'


const Hoader = () => {
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <p className="img-logo">KUY BLOG</p>
            <div className="menu-item">
                <p onClick={() => navigate('/login')}>Logout</p>
            </div>
        </div>
    )
}

export default Hoader
