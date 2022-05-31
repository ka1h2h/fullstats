import React from 'react'
import './Password.css'

const Password = (props) => {
    const passwordHandler = (e) => {
        props.setValue(e.target.value)
    }
    return (
        <input value={props.value} onChange={passwordHandler} className='password' type='password' placeholder='Пароль' />
    )
}

export default Password