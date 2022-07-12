import React from 'react';
import { WinLossRatioChart } from '../Components/WinLossRatioChart';
import { GameStats } from '../Components/GameStats';
import '../Styles/DashboardView.css'

export const DashboardView = () => {

  return (
    <>
    <h1>Dashboard</h1>
    <section className="game-data-section">
      <WinLossRatioChart/>
      <GameStats />
    </section>
    </>
  )


}
