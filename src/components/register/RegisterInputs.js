import React, { useState } from 'react'
import './Register.css'
import Email from '../email'
import Password from '../password'
import { useDispatch, useSelector } from 'react-redux'
import { registerNewUser } from '../../Redux/slices'
import { useNavigate } from 'react-router-dom'

const RegisterInputs = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const dispatch = useDispatch()
    const store = useSelector(state => state.key)
    const navigate = useNavigate()

    if (store) {
        navigate('/')
    }

    return (
        <div>
            <input value={name}
                onChange={(e) => setName(e.target.value)}
                className='name-input'
                type='text'
                placeholder='Имя' />
            <input value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type='text'
                placeholder='Фамилия' />
            <Email value={email} setValue={setEmail} />
            <Password value={password} setValue={setPassword} />
            <button className='register-button'
                onClick={() => dispatch(registerNewUser({ email, password, name, surname }))}> Зарегистрироваться</button>
        </div>
    )
}

export default RegisterInputs