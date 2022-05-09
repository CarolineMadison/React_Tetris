//This is a stub for the final implementation. 
//It imports the actions and defines and exports the gameReducer method.

import {
  MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN, ROTATE,
  PAUSE, RESUME, RESTART, GAME_OVER
} from '../actions'

import { defaultState } from '../utils'

//The most common state shape for a Redux app is a plain Javascript object containing "slices" of domain-specific data at each top-level key. Similarly, the most common approach to writing reducer logic for that state shape is to have "slice reducer" functions, each with the same (state, action) signature, and each responsible for managing all updates to that specific slice of state. Multiple slice reducers can respond to the same action, independently update their own slice as needed, and the updated slices are combined into the new state object.

const gameReducer = (state = defaultState(), action) => {

  switch(action.type) {
    case ROTATE:

      return state

    case MOVE_RIGHT:

      return state

    case MOVE_LEFT:

      return state

    case MOVE_DOWN:

      return state

    case RESUME:

      return state

    case PAUSE:

      return state

    case GAME_OVER:

      return state

    case RESTART:

      return state

    default:
      return state
  }
}

export default gameReducer