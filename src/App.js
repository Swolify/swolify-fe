import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { BingoView } from './Views/BingoView';
import { ProfileView } from './Views/ProfileView';
import { DashboardView } from './Views/DashboardView'

import './App.css';


export const App = () => {

  const [user, setUser] = useState(null);
  const [gameData, addGameData] = useState(null)
  const [gameScreen, setGameScreen] = useState(<DashboardView user={user} addGameData={addGameData} />)


  useEffect(() => {
    gameData && console.log(gameData)
    gameData && setGameScreen(<BingoView activities={gameData.createGame.game.gameActivities}/>)
  }, [gameData])



  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ProfileView setUser={setUser}/>} />
        <Route exact path="/game" element={gameScreen} />
      </Routes>
    </div>
  );
}
