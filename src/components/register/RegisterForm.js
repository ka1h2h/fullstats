import React from 'react'
import './Register.css'
import LogoMobile from '../logoMobile/LogoMobile'
import RegisterInputs from './RegisterInputs'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <LogoMobile />
            <p className='register-form'>Зарегистрироваться</p>
            <p className='data'>Зарегистрируйтесь, чтобы начать работу с сервисом:</p>
            <RegisterInputs />
            <div className='registrationDesktopDown'>Регистрируясь, я соглашаюсь с минимальными
                условиями обслуживания и <a>Политикой конфиденциальности.</a></div>
            <div className='loginMobile'>Уже есть аккаунт?<Link to={'/login'}>Войти</Link></div>
        </form>
    )
}

export default RegisterForm