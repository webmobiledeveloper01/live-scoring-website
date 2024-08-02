import { SET_TEAM_INFO } from '../actions/types'

// Initial State Alerts
const initialState = {
  type: 'competition',
  text: 'Premier League',
  subtext: 'England',
  icon: 'https://static.livescore.com/i2/fh/england.jpg'
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_TEAM_INFO:
      return payload
    default:
      return state
  }
}
