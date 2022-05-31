import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

import login from './../images/login.svg'
import HeadingLoginForm from './LoginForm'
import MainLogo from '../mainLogo/MainLogo'

const Login = () => {
    return (
        <div className='container-login'>
            <div className='login-image'>
                <MainLogo />
                <div><img className='img-login' src={login} /></div>
            </div>
            <div className='authorizationDesktop'>Нет учетной записи? <Link to={'/register'}>Зарегистрироваться</Link></div>
            <HeadingLoginForm />
        </div>
    )
}

export default Login