//Implement the controls
//1. Build out the Left, Right, Rotate, and Down controls
//2. Style the controls
//3. Add the controls to App.js

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'

export default function Controls(props) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.isRunning)
    return (
        <div className={`controls`}>
            {/* left */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveLeft())
                }}>Left</button>

            {/* right */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveRight())
                }}>Right</button>

            {/* rotate */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(rotate())
                }}>Rotate</button>

            {/* down */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveDown())
                }}>Down</button>

        </div>
    )
}
