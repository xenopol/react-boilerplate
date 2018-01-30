import { combineReducers } from 'redux'
import time from './reducers/time'

const reducer = combineReducers({
  time,
})

export default reducer