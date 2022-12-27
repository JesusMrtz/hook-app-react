import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './10-useContext/router/Router'
import { HookApp } from './HooksApp'
import './index.css'

// Importamos el useReducer
// import './09-useReducer/01-introReducer';

const router = Router();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
