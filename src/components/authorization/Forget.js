import React from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'

const QuestionsForm = () => {
    return (
        <div className='remember-me'>
            <label>
                <input type='checkbox' />
                <span>Запомнить меня</span>
            </label>
            <Link to={'/reset'}>Забыли пароль?</Link>
        </div>
    )
}

export default QuestionsForm