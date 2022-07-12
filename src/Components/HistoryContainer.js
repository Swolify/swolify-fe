import React from 'react'
import '../Styles/HistoryContainer.css'

export const HistoryContainer = () => {

const games = [{gameId: 1, activ: [1, 6, 2, 7], outcome: "win"},
               {gameId: 2, activ: [10, 69, 29, 76], outcome: "loss"},
               {gameId: 3, activ: [61, 26, 72, 27], outcome: "win"}]

  const generateHistoryCards = () => {
    const historyCards = games.map(game => {
    const activities = game.activ.map(activity => {
      return (
        <li>{activity}</li>
      )
    })

      return (
        <div>
          <p>Game number: {game.gameId}</p>
          <p>Outcome: {game.outcome}</p>
          <ul>
            {activities}
          </ul>
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
