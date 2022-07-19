import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { BingoView } from './Views/BingoView';
import { ProfileView } from './Views/ProfileView';
import { DashboardView } from './Views/DashboardView'
import { HistoryContainer } from './Components/HistoryContainer'
import './App.css';

export const App = () => {

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null)
  const [gameData, addGameData] = useState(null)
  const [gameScreen, setGameScreen] = useState("")

  useEffect(() => {
    gameData && console.log(gameData)
    gameData && userId && setGameScreen(<BingoView activities={gameData.createGame.game.gameActivities}/>)
  }, [gameData])

  useEffect(() => {
    userId && setGameScreen(<DashboardView user={user} setUser={setUser} userId={userId} addGameData={addGameData} />)
  }, [userId])

  useEffect(() => {
    user && setGameScreen(<HistoryContainer user={user} />)
    user && setGameScreen(<DashboardView user={user} setUser={setUser} userId={userId} addGameData={addGameData} />)
  }, [user])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ProfileView setUserId={setUserId} userId={userId} setUser={setUser}/>} />
        <Route exact path="/game" element={gameScreen} />
      </Routes>
    </div>
  );
}
