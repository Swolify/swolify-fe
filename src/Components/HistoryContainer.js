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
        user.games.map((game, index) =>{
          const activities = game.completedActivities.map(activity => <p key={activity.name}>{activity.name}</p>)
          return (
            <div key={game.id} className="history-card">
              <p>Game Number: {index + 1}</p>
              {displayWin(game.win)}
              {activities}
            </div>
          )
        })
      )
    }
  }

  return (
    <section className="history-container">
      <h2 className="scores-history">SCORES</h2>
      <div className="cards-wrapper">
      {generateHistoryCards()}
      </div>
    </section>
  )
}
