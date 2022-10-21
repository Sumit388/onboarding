import React from 'react'
import './Logo.css'
import logo from '../Assets/logo.png'

function Logo() {
  return (
    <div className='Logo'>
     <img src={logo} alt="" />
     <h1>Eden</h1>
    </div>
  )
}

export default Logo