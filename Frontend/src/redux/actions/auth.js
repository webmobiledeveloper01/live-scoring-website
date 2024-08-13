import { SET_AUTH } from './types'

export const logout = data => dispatch => {
  dispatch({
    type: SET_AUTH,
    payload: {
      name:"",
      authentification: false,
      role: 'common'
    }
  })
}

export const setAuth = data => dispatch => {
  dispatch({
    type: SET_AUTH,
    payload: {
      name:data.name,
      authentification: true,
      role: data.role
    }
  })
}
