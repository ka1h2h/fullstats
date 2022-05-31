import React from 'react'
import { Link } from 'react-router-dom'
import './ResetPw.css'
import MainLogo from '../mainLogo/MainLogo'
import LogoMobile from '../logoMobile/LogoMobile'
import Email from '../email'


const ResetPw = () => {
    return (
        <div className='containerResetPw'>
            <div className='resetLogoContainer'>
                <MainLogo />
            </div>
            <form >
                <LogoMobile />
                <p className='forgotPw'>Забыли свой пароль?</p>
                <p className='resetInformation'>Пожалуйста, введите адрес электронной почты, связанный
                    с вашей учетной записью, и мы отправим вам ссылку для сброса пароля.</p>
                <Email />
                <button className='reset-button'>Восстановить пароль</button>
                <div className='goBack'><Link to={'/login'}>Назад</Link></div>
            </form>
        </div>
    )
}

export default ResetPw