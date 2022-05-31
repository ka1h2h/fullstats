import React from 'react'
import './Email.css'

const Email = (props) => {
    const emailHandler = (e) => {
        props.setValue(e.target.value)
    }
    return (
        <input value={props.value} onChange={emailHandler} className='email' type='email' placeholder='Email' />
    )
}

export default Email