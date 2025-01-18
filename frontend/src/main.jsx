import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    
    
  </StrictMode>,
)
