import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Halo from '../pages/Halo.jsx'
import Eli from '../pages/Eli.jsx'
import Backstory from '../pages/Backstory.jsx'
import Mun from '../pages/Mun.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Halo" element={<Halo />} />
        <Route path="/Eli" element={<Eli />} />
        <Route path="/Backstory" element={<Backstory />} />
        <Route path="/Mun" element={<Mun />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
