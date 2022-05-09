//Implement the score board
//1. Create the score board component with restart and play/resume buttons
//2. Style the component
//3. Add to App.js

import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <div>Score:{ props.score }</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
            }}>Play</button>
            <button className="score-board-button" onClick={(e) => {
            }}>Restart</button>s
        </div>
    )
}