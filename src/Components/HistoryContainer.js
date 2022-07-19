import React from 'react'
import '../Styles/HistoryContainer.css'

export const HistoryContainer = ({user}) => {

  const displayWin = (win) => {
    if(win){
      return <p>Outcome: Win!</p>
    }
    return <p>Outcome: Loss!</p>
  }
  const generateHistoryCards = () => {
    if(user){
      return (
        user.games.map(game =>{
          const activities = game.completedActivities.map(activity => <p key={activity.name}>{activity.name}</p>)
          return (
            <div key={game.id} className="history-card">
              <p>Game Number: {game.id}</p>
              {displayWin(game.win)}
              <ul className="activity-history">
                {activities}
              </ul>
            </div>
          )
        })
      )
    }
  }

  return (
    <section className="history-container">
      {generateHistoryCards()}
    </section>
  )
}
