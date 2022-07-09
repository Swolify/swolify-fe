import React from 'react'
import { UserIcon } from '../Components/UserIcon'
import '../Styles/ProfileView.css'
import bunny from '../Images/bunny-icon.png'
import cow from '../Images/cow-icon.png'
import dog from '../Images/dog-icon.png'
import othercow from '../Images/other-cow-icon.png'

export const ProfileView = () => {

const animals = [bunny, cow, dog, othercow]

const allIcons = animals.map((animal) => <UserIcon image={animal} key={animal}/>)




  return (
    <section className='profile-view-section'>
      <div className='headers'>
        <h1 className='landing-header'>Swolify</h1>
      </div>
      <div className="icons-section">
        {allIcons}
      </div>
      <h2>Select A Profile</h2>
    </section>
  )
}
