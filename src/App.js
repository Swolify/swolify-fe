import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import './App.css';


export const App = () => {

  return (
    <div className="App">
      <Route exact path="/">
        <ProfileView />
      </Route>
      <Route exact path="/bingo">
        <BingoView />
      </Route>
    </div>
  );
}
