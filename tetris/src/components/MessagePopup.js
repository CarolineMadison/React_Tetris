//Implement the message popup
//1. Build out message popup component
//2. Style the controls
//3. Add the component to App.js

import React from 'react'
import { useSelector } from 'react-redux'

// Displays a message
export default function MessagePopup(props) {
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)

  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'Game Over'
    isHidden = ''
  } else if (!isRunning) {
    message = 'Paused'
    isHidden = ''
  }

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
    </div>
  )
}

