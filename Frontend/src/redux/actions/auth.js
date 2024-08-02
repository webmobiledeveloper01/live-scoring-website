import { SET_AUTH } from './types'

export const logout = data => dispatch => {
  dispatch({
    type: SET_AUTH,
    payload: {
      authentification: false,
      role: 'common'
    }
  })
}

export const setAuth = data => dispatch => {
  dispatch({
    type: SET_AUTH,
    payload: {
      authentification: true,
      role: data.email
    }
  })
}
