import React, { useState, useEffect } from 'react'
import './Nav.css'
import logo from './../images/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userDataLogin } from '../../Redux/slices'
import { logOut } from '../../Redux/slices'


const Navibar = () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.key)

    useEffect(() => {
        dispatch(userDataLogin(JSON.parse(localStorage.getItem('user'))))
    }, [])

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <a className='fullstats'><img src={logo} />FullStats</a>
                </li>
                <li className='login'>
                    {store ? <Link className='loginUser' to={'/'}>{store.name} {store.surname}
                        <button className='logout' onClick={() => dispatch(logOut())}>/ выйти</button></Link> :
                        <Link to={'/login'} className='login'>Войти</Link>}
                </li>
            </ul>
        </div >
    )
}

export default Navibar