import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx' // Changed to ../
import Halo from '../pages/Halo.jsx' // Changed to ../
import Eli from '../pages/Eli.jsx'   // Changed to ../
import Backstory from '../pages/Backstory.jsx' // Changed to ../
import Byf from '../pages/Byf.jsx'   // Changed to ../
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Halo" element={<Halo />} />
        <Route path="/Eli" element={<Eli />} />
        <Route path="/Backstory" element={<Backstory />} />
        <Route path="/Byf" element={<Byf />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)