import React from 'react'
import { UserIcon } from '../Components/UserIcon'
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


export const ProfileView = ({setUserId, userId}) => {
  const animals = [bunny, cow, dog, othercow, bunny, cow, dog, othercow, bunny, cow, dog, othercow]
  let allIcons
  let { data, loading, error } = useQuery(ALL_USERS)
    if (loading) console.log('Loading...');
    if (error) console.log("error!", error.message)
    if (data) allIcons = data.fetchAllUsers.map((user, index) => <UserIcon setUserId={setUserId} image={animals[index]} id={user.id} key={user.id}/>)

  return (
    <section className='profile-view-section'>
      <div className='headers'>
        <h1 className='landing-header'>Swolify</h1>
      </div>
      {allIcons}
      <div className="icons-section">
      </div>
      <h2 className="profile-instructions">Select A Profile</h2>
    </section>
  )
}
