import React from 'react'
import { UserIcon } from '../Components/UserIcon'
import { Logo } from '../Components/Logo'
import { StartButton } from '../Components/StartButton'
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
        <Logo />
        <StartButton />
      </div>
      <div className="icons-section">
        {allIcons}
      </div>
      <h2 className="profile-instructions">Select A Profile</h2>
    </section>
  )
}
