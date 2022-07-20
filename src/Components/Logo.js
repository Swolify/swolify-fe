import React from 'react'
import '../Styles/Logo.css'
import SwolifyLogo from '../Images/Swolify-logo.png'

export const Logo = ({ image }) => {

  return (
    <div className='logo-section'>
        <img className='logo-icon' src={SwolifyLogo} />
    </div>
  )
}