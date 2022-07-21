import React from 'react'
import { VictoryPie } from 'victory';
import '../Styles/WinLossRatio.css'

export const WinLossRatioChart = ({user}) => {

  if(user){
    if(user.wins || user.losses){
      return (
        <section className="pieChart">
          <VictoryPie
            style={{
              data: {
                fillOpacity: 0.9, stroke: "black", strokeWidth: 20
              },
              labels: {
                fontSize: 15, fill: "#fff", fontFamily: 'Press Start 2P'
              }
            }}
            colorScale={["#e61bd8", "#35abef" ]}
            data={[
             { x: `Wins (${user.wins})`, y: user.wins },
             { x: `Losses (${user.losses})`, y: user.losses }
             ]}
          />
        </section>
      )
    }
    return (
        <section className="pieChart">
          <p>Please complete a game to track wins/losse</p>
        </section>
    )
  }
}
