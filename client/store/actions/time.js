export const SET_TIME = 'SET_TIME'
export const ADD_ONE_HOUR = 'ADD_ONE_HOUR'

export const setTime = time => ({
  type: SET_TIME,
  payload: time,
})

export const addOneHour = () => ({
  type: ADD_ONE_HOUR,
})