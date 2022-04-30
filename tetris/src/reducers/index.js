import { combineReducers } from 'redux'
import gameReducer from './game-reducer'

// The state handled by `gameReducer` will be stored with the property name `game` on the Redux store.

//combineReducers has specific behavior that does work that way. In order to assemble the new state tree, combineReducers will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. So, in that sense, using combineReducers does "call all reducers", or at least all of the slice reducers it is wrapping.

const reducers = combineReducers({
  game: gameReducer
})

export default reducers