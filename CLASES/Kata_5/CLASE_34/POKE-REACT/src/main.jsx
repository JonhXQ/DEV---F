import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* IMPORTAR BOOTSTRAP CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
/* IMPORTAR BOOTSTRAP JS */
import 'bootstrap/dist/js/bootstrap.bundle.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
