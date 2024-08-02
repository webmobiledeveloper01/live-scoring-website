import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/normalize.css'
import './assets/styles/common.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
reportWebVitals()
