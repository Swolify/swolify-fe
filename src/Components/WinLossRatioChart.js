import React from 'react'
import { VictoryPie } from 'victory';

export const WinLossRatioChart = () => {

  return (
    <section className="pieChart">
      <VictoryPie
        colorScale={["green", "tomato" ]}
        data={[
         { x: "Wins (52)", y: 52 },
         { x: "Losses (12)", y: 12 }
         ]}
      />
    </section>
  )
}
