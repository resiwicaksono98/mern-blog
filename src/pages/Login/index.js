import React from 'react'
import { useNavigate } from 'react-router'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="main-page">
        <div className="left">
            <img src={LoginBg} alt="login-bg" className="bg-image" />
        </div>
        <div className="right">
            <p className="title">Login</p>
            <Input label="Email" placeholder="Email" />
            <Gap height={18} />
            <Input label="Password" placeholder="Password"/>
            <Gap height={30}/>
            <Button title="Login" />
            <Gap height={20} />
            <Link title="Belum Punya Akun?" textAlign='center' onClick={() => navigate('/register') }/>
        </div>
    </div>
    )
}

export default Login
