import React from 'react';
import { useEffect } from 'react';
import { WinLossRatioChart } from '../Components/WinLossRatioChart';
import { GameStats } from '../Components/GameStats';
import { GameSelectionForm } from '../Components/GameSelectionForm'
import { HistoryContainer } from '../Components/HistoryContainer'
import '../Styles/DashboardView.css'
import { useQuery, gql } from '@apollo/client';

export const DashboardView = ({ addGameData, user, setUser, userId, setRenderGame}) => {
    const USER = gql`
      query fetchUser($id: ID!) {
        fetchUser(id: $id) {
          name
          email
          wins
          losses
          gameCount
          activityCount
          daysInCurrentActiveStreak
          daysInLongestStreak
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
    useEffect(() => {
      if (data) setUser(data.fetchUser)
    }, [data])


  return (
    <>
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-wrapper">
        <GameSelectionForm addGameData={addGameData} userId={userId}/>
        <section className="game-data-section">
          <WinLossRatioChart user={user}/>
          <GameStats user={user}/>
        </section>
    </div>  
    <HistoryContainer user={user}/>
    </>
  )
}
