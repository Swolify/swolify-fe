import React from 'react'
import '../Styles/UserIcon.css'
import { Link } from 'react-router-dom';

export const UserIcon = ({ image }) => {

  return (
    <div className='user-icon-background'>
        <Link to="/dashboard"><img className='user-icon' src={image} /></Link>
    </div>
  )
}
