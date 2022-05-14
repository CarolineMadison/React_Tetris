//This is a stub for the final implementation. 
//It imports the actions and defines and exports the gameReducer method.

import {
  MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN, ROTATE,
  PAUSE, RESUME, RESTART, GAME_OVER
} from '../actions'

import {
  defaultState,
  nextRotation,
  canMoveTo,
  addBlockToGrid,
  checkRows,
  randomShape
} from '../utils'

//The most common state shape for a Redux app is a plain Javascript object containing "slices" of domain-specific data at each top-level key. Similarly, the most common approach to writing reducer logic for that state shape is to have "slice reducer" functions, each with the same (state, action) signature, and each responsible for managing all updates to that specific slice of state. Multiple slice reducers can respond to the same action, independently update their own slice as needed, and the updated slices are combined into the new state object.

const gameReducer = (state = defaultState(), action) => {

  const { shape, grid, x, y, rotation, nextShape, score, isRunning } = state
  switch (action.type) {
    case ROTATE:
      const newRotation = nextRotation(shape, rotation)
      if (canMoveTo(shape, grid, x, y, newRotation)) {
        return { ...state, rotation: newRotation }
      }
      return state

    case MOVE_RIGHT:
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        return { ...state, x: x + 1 }
      }
      return state

    case MOVE_LEFT:

      // subtract 1 from the x and check if this new position is possible by calling `canMoveTo()
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        return { ...state, x: x - 1 }
      }
      return state

    case MOVE_DOWN:
      // Get the next potential Y position
      const maybeY = y + 1
      // Check if the current block can move here
      if (canMoveTo(shape, grid, x, maybeY, rotation)) {
        // If so move the block
        return { ...state, y: maybeY }
      }
      // If not place the block
      const newGrid = addBlockToGrid(shape, grid, x, y, rotation)
      // reset some things to start a new shape/block
      const newState = defaultState()
      newState.grid = newGrid
      newState.shape = nextShape
      newState.nextShape = randomShape()
      newState.score = score
      newState.isRunning = isRunning

      if (!canMoveTo(nextShape, newGrid, 0, 4, 0)) {
        // Game Over
        console.log("Game Should be over...")
        newState.shape = 0
        return { ...state, gameOver: true }
      }
      // Update the score based on if rows were completed or not
      newState.score = score + checkRows(newGrid)

      return newState

    case RESUME:

      return { ...state, isRunning: true }

    case PAUSE:

      return { ...state, isRunning: false }

    case GAME_OVER:

      return state

    case RESTART:

      return state

    default:
      return state
  }
}

export default gameReducer