import React from 'react'
import '../Styles/UserIcon.css'
import { Link } from 'react-router-dom'
import { gql } from '@apollo/client';

export const UserIcon = ({ image, id, setUserId }) => {

  return (
    <div className='user-icon-background'>
        <Link to='/game' > <img onClick={() => setUserId(id)} className='user-icon' src={image} /> </Link>
    </div>
  )
}
