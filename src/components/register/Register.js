import React from 'react'
import './Register.css'
import MainLogo from '../mainLogo/MainLogo'
import register from './../images/register.svg'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'


const Register = () => {
    return (
        <div className='container-registration'>
            <div className='register-image'>
                <MainLogo />
                <div className='img-register'><img className='img-login' src={register} /></div>
            </div>
            <div className='registrationDesktop'>Уже есть аккаунт?<Link to={'/login'}> Войти</Link></div>
            <RegisterForm />
        </div>

    )
}

export default Register