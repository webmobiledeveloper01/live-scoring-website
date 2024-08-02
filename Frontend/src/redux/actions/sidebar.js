import { SET_TEAM_INFO } from './types'

export const selectSidebarItem = data => dispatch => {
  dispatch({
    type: SET_TEAM_INFO,
    payload: {
      ...data
    }
  })
}
