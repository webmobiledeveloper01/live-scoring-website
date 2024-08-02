import { combineReducers } from 'redux'
import sidebar from './sidebar'
import requestplayer from './requestplayer'
import auth from './auth'
import signModal from './sign'
import drawer from './drawer'
import breadcrumbs from './breadcrumbs'
import darkMode from './darkMode'

export default combineReducers({
  auth,
  sidebar,
  requestplayer,
  signModal,
  drawer,
  darkMode,
  breadcrumbs
})
