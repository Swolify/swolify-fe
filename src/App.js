import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { BingoView } from './Views/BingoView';
import { ProfileView } from './Views/ProfileView';

import './App.css';


export const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ProfileView />} />
        <Route exact path="/bingo" element={<BingoView />} />
      </Routes>
    </div>
  );
}
