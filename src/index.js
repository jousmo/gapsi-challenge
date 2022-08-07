import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import reportWebVitals from './reportWebVitals'
import Home from './pages/home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

reportWebVitals()
