import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { WineContextProvider } from './context/WineContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WineContextProvider>
        <App />
      </WineContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
