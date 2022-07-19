import React from 'react'
import "../Styles/StartButton.css"

export const StartButton = ({ showProfiles }) => {

  return (
    <section className="start-section">
      <div className="press-start-phrase">PRESS START</div>
      <button className="start-button" onClick={() => {
          showProfiles()}}>START</button>
    </section>
  )
}
