import { SET_TIME, ADD_ONE_HOUR } from '../actions/time'

const DATE = new Date()

const initialState = {
  hours: DATE.getHours(),
  minutes: DATE.getMinutes(),
  seconds: DATE.getSeconds(),
}

const time = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TIME:
      return {
        ...state,
        hours: payload.hours,
        minutes: payload.minutes,
        seconds: payload.seconds,
      }
    case ADD_ONE_HOUR:
      return {
        ...state,
        hours: state.hours + 1,
      }
    default:
      return state
  }
}

export default time