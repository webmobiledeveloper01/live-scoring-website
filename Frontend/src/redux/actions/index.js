import {
  SET_DRAWER_OPEN,
  SET_OPEN_RQUEST_PALYER,
  SET_SIGN_MODAL,
  ADD_BREADCRUMBS,
  SET_BREADCRUMBS
} from './types'

export const requestPlayer = () => dispatch => {
  dispatch({
    type: SET_OPEN_RQUEST_PALYER,
    payload: {
      open: true
    }
  })
}
export const requestPlayerClose = () => dispatch => {
  dispatch({
    type: SET_OPEN_RQUEST_PALYER,
    payload: {
      open: false
    }
  })
}
export const openSignModal = flag => dispatch => {
  dispatch({
    type: SET_SIGN_MODAL,
    payload: {
      open: flag
    }
  })
}
export const handleDrawer = flag => dispatch => {
  dispatch({
    type: SET_DRAWER_OPEN,
    payload: {
      open: flag
    }
  })
}
export const setBreadCrumbs = (type, data) => dispatch => {
  dispatch({
    type: type == 'add' ? ADD_BREADCRUMBS : SET_BREADCRUMBS,
    payload: {
      ...data
    }
  })
}
export const setDarkMode = flag => dispatch => {
  dispatch({
    type: 'SET_DARK',
    payload: flag ? 'dark' : 'light'
  })
}
