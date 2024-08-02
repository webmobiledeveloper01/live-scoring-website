import { ADD_BREADCRUMBS, SET_BREADCRUMBS } from '../actions/types'

// Initial State Alerts
const initialState = []

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_BREADCRUMBS:
      return [...state, payload]
    case SET_BREADCRUMBS:
      return [payload]
    default:
      return state
  }
}
