import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

import Navbar from './pages/Library/Navbar.jsx';
import Home from "./pages/Library/Home.jsx"
import About from "./pages/Library/About.jsx"
import Books from "./pages/Library/Books.jsx"

import Products from './Shop/Products.jsx';
import './index.css'

// import './newindex.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} />
        </Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
