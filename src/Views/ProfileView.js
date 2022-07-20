import React from 'react'
import { useState, useEffect } from 'react'
import { UserIcon } from '../Components/UserIcon'
import { Logo } from '../Components/Logo'
import { SmallLogo } from '../Components/SmallLogo'
import { StartButton } from '../Components/StartButton'
import '../Styles/ProfileView.css'
import { useQuery, useMutation, gql } from '@apollo/client';
import bunny from '../Images/bunny-icon.png'
import cow from '../Images/cow-icon.png'
import dog from '../Images/dog-icon.png'
import othercow from '../Images/other-cow-icon.png'

const ALL_USERS = gql`
    query {
      fetchAllUsers{
        name
        id
        email
      }
    }
  `


export const ProfileView = ({setUserId, userId, startTimer}) => {
  const [profilesScreen, setProfilesScreen] = useState(false)
  const [loadingScreen, setLoadingScreen] = useState(false)

  const animals = [bunny, cow, dog, othercow, bunny, cow, dog, othercow, bunny, cow, dog, othercow]
  let allIcons
  let { data, loading, error } = useQuery(ALL_USERS)
    if (loading) console.log('Loading...');
    if (error) console.log("error!", error.message)
    if (data) allIcons = data.fetchAllUsers.map((user, index) => <UserIcon setUserId={setUserId} image={animals[index]} id={user.id} key={user.id}/>)

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
