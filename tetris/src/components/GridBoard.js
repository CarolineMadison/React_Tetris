import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown } from '../actions'
import GridSquare from './GridSquare'
import { shapes } from '../utils'

export default function GridBoard(props) {

  //Timer variables:
  //requestRef - Holds a referece to requestAnimationFrame
  //lastUpdateTimeRef - tracks the time of the last update
  //progressTimeRef - tracks the total time between updates

  const requestRef = useRef()
  const lastUpdateTimeRef = useRef(0)
  const progressTimeRef = useRef(0)
  const dispatch = useDispatch()


  //The game needs to handle time and issue MOVE_DOWN actions at intervals.
  //The interval will be the speed set on state.
 
  //JavaScript provides a method to notify our applications when the browser is about to redraw the screen.
  //requestAnimationFrame() is a method that takes a callback that is executed just before the browser redraws the window.
  const update = (time) => {
    requestRef.current = requestAnimationFrame(update)
    if (!isRunning) {
      return
    }

    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time
    }
    const deltaTime = time - lastUpdateTimeRef.current
    progressTimeRef.current += deltaTime
    if (progressTimeRef.current > speed) {
      dispatch(moveDown())
      progressTimeRef.current = 0
    }
    lastUpdateTimeRef.current = time
  }

  /////////////
  let game = useSelector((state) => state.game)
  const { grid, shape, rotation, x, y, isRunning, speed } = game
  

  const block = shapes[shape][rotation]
  const blockColor = shape
  // map rows
  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // Find the block x and y on the shape grid
      // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
      const blockX = col - x
      const blockY = row - y
      let color = square
      // Map current falling block to grid.
      // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
      if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
        color = block[blockY][blockX] === 0 ? color : blockColor
      }
      // Generate a unique key for every block
      const k = row * grid[0].length + col;
      // Generate a grid square
      return <GridSquare
        key={k}
        color={color} />
    })
  })

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
  }, [isRunning])

  return (
    <div className='grid-board'>
      {gridSquares}
    </div>
  )
}
