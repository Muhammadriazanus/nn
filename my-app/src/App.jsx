import './App.css';
import React, { useState } from 'react'

import StartGame from './Components/StartGame';
import GamePlay from "./Components/GamePlay"


function App() {
  const [isGameStarted, SetisGameStarted] = useState(false)
  const Toggle = () => {
    SetisGameStarted((prev) => !prev)
  }
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={Toggle} />}

    </>
  );
}

export default App;
