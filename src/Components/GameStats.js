import React from 'react';
import '../Styles/GameStats.css'

export const GameStats = ({user}) => {

  if(user){
    return (
      <section className="game-summary-section">
        <div>
          <p>{user.gameCount}</p>
          <h3>Games</h3>
        </div>
        <div>
          <p>{user.activityCount}</p>
          <h3>Activities</h3>
        </div>
      </section>
    )
  }
}
