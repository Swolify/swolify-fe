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

const USER = gql`
  query fetchUser($id: Int!) {
    fetchUser(id: $id) {
      name
      email
      wins
      losses
      gameCount
      activityCount
      activities {
        name
      }
    }
  }
`


export const ProfileView = ({setUser}) => {
  const animals = [bunny, cow, dog, othercow]
  const allIcons = animals.map((animal) => <UserIcon image={animal} key={animal}/>)

  const user= useQuery(USER)
    if (user.loading) console.log('Submitting...');
    if (user.error) console.log("error!", )
    if (user.data) console.log()

//
// console.log(useQuery(ALL_USERS))
console.log(user({
  variables: {
    id: 16,
  }
}))

  return (
    <section className='profile-view-section'>
      <div className='headers'>
        <h1 className='landing-header'>Swolify</h1>
      </div>
      <div className="icons-section">
        {allIcons}
      </div>
      <h2 className="profile-instructions">Select A Profile</h2>
    </section>
  )
}
