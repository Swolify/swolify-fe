import React from 'react';

import { WinLossRatioChart } from '../Components/WinLossRatioChart';
import { GameStats } from '../Components/GameStats';
import { GameSelectionForm } from '../Components/GameSelectionForm'
import { HistoryContainer } from '../Components/HistoryContainer'
import '../Styles/DashboardView.css'
import { useQuery, gql } from '@apollo/client';

export const DashboardView = ({ addGameData, user, setUser, userId}) => {
    const USER = gql`
      query fetchUser($id: ID!) {
        fetchUser(id: $id) {
          name
          email
          wins
          losses
          gameCount
          activityCount
          games{
            id
            win
            completedActivities {
              name
            }
          }
        }
      }
    `

  let { data, loading, error } = useQuery(USER, {variables: {id: userId}})
    if (loading) console.log('Submitting...');
    if (error) console.log("error!", error.message)
    if (data) setUser(data.fetchUser)

  return (
    <>
    <h1>Dashboard</h1>
    <GameSelectionForm addGameData={addGameData} userid={user}/>
    <section className="game-data-section">
      <WinLossRatioChart user={user}/>
      <GameStats user={user}/>
    </section>
    <h2>History</h2>
    <HistoryContainer user={user}/>
    </>
  )
}
