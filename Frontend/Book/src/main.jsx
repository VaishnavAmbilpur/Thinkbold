import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router"
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Toaster
  position="top-left"
  reverseOrder={true}
/>
     <App />
     
    </BrowserRouter>
    
  </StrictMode>,
)
