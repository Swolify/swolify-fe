import React from 'react';
import '../Styles/GameStats.css'

export const GameStats = ({user}) => {
  if(user){
    return (
      <section className='stat-container'>
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
        <section className="game-summary-section">
          <div>
            <p>{user.daysInLongestStreak}</p>
            <h3>Longest Streak</h3>
          </div>
          <div>
            <p>{user.daysInCurrentActiveStreak}</p>
            <h3>Current Streak</h3>
          </div>
        </section>
      </section>
    )
  }
}
