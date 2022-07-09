import React from 'react'
import '../Styles/UserIcon.css'

export const UserIcon = ({ image }) => {

  return (
    <div className='user-icon-background'>
        <img className='user-icon' src={image} />
    </div>
  )
}
