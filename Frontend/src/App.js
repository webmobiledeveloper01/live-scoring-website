import * as React from 'react'
import MainRoutes from './routes'
import store from './redux/store'
import { Provider, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { amber, grey } from '@mui/material/colors'
import './index.css'

function App () {
  // const mode = useSelector(state=>state.darkMode)
  const [mode, setMode] = React.useState('dark')

  // Update the theme only if the mode changes
  const getDesignTokens = mode => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {}
        : {
            primary: amber,
            background: {
              default: '#020B12',
              paper: '#061727',
              appbar: '#041421727'
            },
            text: {
              primary: '#fff',
              secondary: grey[500]
            }
          })
    }
  })

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
