import React from 'react'
import { useNavigate } from 'react-router'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} alt="regis-bg" className="bg-image" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password"/>
                <Gap height={30}/>
                <Button title="Register" />
                <Gap height={20} />
                <Link title="Kembali Ke Login" textAlign='center' onClick={() => navigate('/login')}  />
            </div>
        </div>
    )
}

export default Register
