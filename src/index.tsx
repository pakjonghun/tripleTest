import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/Home'
import './styles/reset.css'
import './styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
