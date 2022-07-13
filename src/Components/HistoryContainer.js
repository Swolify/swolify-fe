import React from 'react'
import '../Styles/HistoryContainer.css'

export const HistoryContainer = () => {

const games = [{gameId: 1, activ: ['sit ups','sit ups','sit ups','sit ups' ], outcome: "win"},
               {gameId: 2, activ: ['Burpee', 'Burpee', 'Burpee', 'Burpee'], outcome: "loss"},
               {gameId: 3, activ: ['squats', 'squats', 'squats', 'squats'], outcome: "win"},
               {gameId: 4, activ: ['sit ups','sit ups','sit ups','sit ups' ], outcome: "win"},
               {gameId: 5, activ: ['Burpee', 'Burpee', 'Burpee', 'Burpee'], outcome: "loss"},
               {gameId: 6, activ: ['squats', 'squats', 'squats', 'squats'], outcome: "win"}]

  const generateHistoryCards = () => {
    const historyCards = games.map(game => {
    const activities = game.activ.map(activity => {
      return (
        <li>{activity}</li>
      )
    })

      return (
        <div className="history-card">
          <p>Game number: {game.gameId}</p>
          <p>Outcome: {game.outcome}</p>
          <ul className="activity-history">
            {activities}
          </ul>
          <hr></hr>
        </div>
      )
    })
    return historyCards
  }

  return (

    <section className="history-container">
      {generateHistoryCards()}
    </section>
  )
}
