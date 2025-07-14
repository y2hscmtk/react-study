import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // state 를 사용하여 리엑트 내의 주소를 관리함
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
