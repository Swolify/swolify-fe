import React from 'react'
import { useState, useEffect } from 'react'
import { UserIcon } from '../Components/UserIcon'
import { Logo } from '../Components/Logo'
import { SmallLogo } from '../Components/SmallLogo'
import { StartButton } from '../Components/StartButton'
import '../Styles/ProfileView.css'
import bunny from '../Images/bunny-icon.png'
import cow from '../Images/cow-icon.png'
import dog from '../Images/dog-icon.png'
import othercow from '../Images/other-cow-icon.png'
import { LoadingScreen } from '../Components/LoadingScreen'

export const ProfileView = () => {
  const [profilesScreen, setProfilesScreen] = useState(false)


const animals = [bunny, cow, dog, othercow]

const allIcons = animals.map((animal) => <UserIcon image={animal} key={animal}/>)


  return (
    <section className='profile-view-section'>
      { !profilesScreen ? <div className='headers'>
        <Logo />
        <StartButton showProfiles={() => {
          setProfilesScreen(true)
        }} /> 
      </div> : null }
      { profilesScreen ? 
      <div>
        <SmallLogo />
        <h2 className="profile-instructions">CHOOSE A PROFILE</h2> 
        <div className="icons-section">
          {allIcons}
        </div>
      </div>: null }
    </section>
  )
}
