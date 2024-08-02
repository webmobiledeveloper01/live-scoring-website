import { SET_DRAWER_OPEN } from '../actions/types'

// Initial State Alerts
const initialState = {
  open: true
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_DRAWER_OPEN:
      return payload
    default:
      return state
  }
}
