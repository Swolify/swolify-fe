import React from 'react'
import '../Styles/Logo.css'
import SwolifyLogo from '../Images/Swolify-logo.png'

export const SmallLogo = ({ image }) => {

  return (
    <div className='small-logo-section'>
        <img className='small-logo-icon' src={SwolifyLogo} />
    </div>
  )
}