//Implement the "next block" area
//1. Build the next block component
//2. Add style to the component
//3. Add the component to App.js
import React from 'react'
import GridSquare from './GridSquare'
import { useSelector } from 'react-redux'
import { shapes } from '../shapes'

// Draws the "next" block view showing the next block to drop
export default function NextBlock(props) {

    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square} />
        })
    })

    const nextShape = useSelector((state) => state.game.nextShape)
    const box = shapes[nextShape][0] // Get the first rotation

    return (
        <div className="next-block">
            {grid}
        </div>
    )
}