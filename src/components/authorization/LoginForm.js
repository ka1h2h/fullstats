import React, { useEffect, useState } from 'react'
import './Auth.css'
import LogoMobile from '../logoMobile/LogoMobile'
import HeadingLoginForm from './HeadingLoginForm'
import Email from '../email'
import Password from '../password'
import QuestionsForm from './Forget'
import { authorizationUser } from '../../Redux/slices'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const LoginForm = () => {

    const handleFormSubmit = e => {
        e.preventDefault();
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const store = useSelector(state => state.key)
    const navigate = useNavigate()

    if (store) {
        navigate('/')
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <LogoMobile />
            <HeadingLoginForm />
            <Email value={email} setValue={setEmail} />
            <Password value={password} setValue={setPassword} />
            <QuestionsForm />
            <button className='login-button' onClick={() => dispatch(authorizationUser({ email, password }))}>Войти</button>
            <div className='authorizationMobile'>Нет учетной записи?
                <Link to={'/register'}>Зарегистрироваться</Link>
            </div>
        </form>
    )
}

export default LoginForm