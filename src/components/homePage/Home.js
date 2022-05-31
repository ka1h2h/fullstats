import React, { useState } from 'react'
import './Nav.css'
import Navibar from './Navibar'
import group from './../images/Group.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {

    const store = useSelector(state => state.key)


    return (
        <div className='main-page'>
            <Navibar />
            <div className='main-page-container'>
                <div className='main-body'>
                    <ul>
                        <li className='start-item'>Start a<br />new project<br /> with <a className='full-stats'>FullStats</a></li>
                        <li className='platform-item'><p>Платформа для аналитики поможет вам в выборе товара<br />
                            или ниши, анализе конкурентов,  увеличении продаж и в<br />
                            ускорении оборачиваемости вашего товара</p></li>
                        <li className='button-item'>
                            {store ? <button className='goservice'><Link to={'/login'}>Перейти к сервису</Link></button> :
                                <button className='goservice'><Link to={'#'}>Попробовать сейчас</Link></button>
                            }
                        </li>
                    </ul>
                </div>
                <div className='listImg'><img src={group} className='group' /></div>
            </div>
        </div>
    )
}

export default Home